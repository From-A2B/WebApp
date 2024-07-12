import { prisma } from '@/lib/prisma';
import { stripe } from '@/lib/stripe';
import SubscriptionDowngradeEmail from '@email/SubscriptionDowngradeEmail';
import SubscriptionFailedEmail from '@email/SubscriptionFailedEmail';
import SuccessUpgradeEmail from '@email/SuccessUpgradeEmail';
import type { User } from '@prisma/client';
import { UserPlan } from '@prisma/client';
import type Stripe from 'stripe';
import { z } from 'zod';

export const upgradeUserToPlan = async (
  userId: string,
  plan: UserPlan = 'PREMIUM'
) => {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      plan: plan,
    },
  });
};

export const downgradeUserFromPlan = async (userId: string) => {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      plan: 'FREE',
    },
  });
};

export const notifyUserOfPremiumUpgrade = async (user: User) => {};

export const notifyUserOfPremiumDowngrade = async (user: User) => {};

export const notifyUserOfPaymentFailure = async (user: User) => {};

const PlanSchema = z.nativeEnum(UserPlan);

export const getPlanFromLineItem = async (
  lineItems?:
    | Stripe.LineItem[]
    | Stripe.InvoiceLineItem[]
    | Stripe.SubscriptionItem[]
): Promise<UserPlan> => {
  if (!lineItems) {
    return 'FREE';
  }

  const productId = lineItems[0].price?.product;

  if (!productId) {
    return 'FREE';
  }

  const product = await stripe.products.retrieve(productId as string);

  const safePlan = PlanSchema.safeParse(product.metadata.plan);

  if (safePlan.success) {
    return safePlan.data;
  } else {
    return 'FREE';
  }
};
