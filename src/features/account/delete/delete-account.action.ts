'use server';

import { prisma } from '@/lib/prisma';
import { ActionError, authAction } from '@/lib/server-actions/safe-actions';
import { stripe } from '@/lib/stripe';
import { z } from 'zod';

export const deleteAccountAction = authAction(
  z.any(),
  async (_, ctx): Promise<void> => {
    const userId = ctx.user.id;

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new ActionError("You don't have an account!");
    }

    await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    if (user.stripeCustomerId) {
      const subscriptions = await stripe.subscriptions.list({
        customer: user.stripeCustomerId,
      });

      await Promise.all(
        subscriptions.data.map(async (subscription) => {
          await stripe.subscriptions.cancel(subscription.id);
        })
      );

      await stripe.customers.del(user.stripeCustomerId);
    }
  }
);
