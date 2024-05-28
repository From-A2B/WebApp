import { stripe } from '@/lib/stripe';
import type { User } from 'next-auth';

export const setupStripeCustomer = async (user: User) => {
  if (!user.email) {
    return;
  }

  const customer = await stripe.customers.create({
    email: user.email,
    name: user.name ?? undefined,
  });

  return customer.id;
};
