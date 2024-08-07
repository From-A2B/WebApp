'use server';

import { setupResendCustomer } from '@/lib/auth/auth-config-setup';
import { prisma } from '@/lib/prisma';
import { ActionError, action } from '@/lib/server-actions/safe-actions';
import { EmailActionSchema } from './addEmail.schema';

export const addEmailAction = action(EmailActionSchema, async ({ email }) => {
  try {
    const userData = {
      email,
    };

    // TODO: Setup Stripe
    // const stripeCustomerId = await setupStripeCustomer(userData);
    const resendContactId = await setupResendCustomer(userData);

    await prisma.user.create({
      data: {
        ...userData,
        // stripeCustomerId,
        resendContactId,
      },
    });

    return { email };
  } catch (error) {
    throw new ActionError('The email is already in use');
  }
});
