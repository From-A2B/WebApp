import { env } from '@/lib/env/server';
import { prisma } from '@/lib/prisma';
import type { User } from '@prisma/client';
import type { NextAuthConfig, Session } from 'next-auth';
import NextAuth from 'next-auth';
import {
  credentialsOverrideJwt,
  credentialsSignInCallback,
} from './credentialsProvider';
import { getNextAuthConfigProviders } from './getNextAuthConfigProvider';

export const { handlers, auth: baseAuth } = NextAuth(
  (req) =>
    ({
      pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error',
        verifyRequest: '/auth/verify-request',
        newUser: '/auth/new-user',
      },
      theme: {
        logo: '/images/logo-text.png',
      },
      adapter: PrismaAdapter(prisma),
      providers: getNextAuthConfigProviders(),
      session: {
        strategy: 'database',
      },
      secret: env.NEXTAUTH_SECRET,
      callbacks: {
        session(params) {
          if (params.newSession) return params.session;

          const typedParams = params as unknown as {
            session: Session;
            user?: User;
          };

          if (!typedParams.user) return typedParams.session;

          typedParams.user.passwordHash = null;

          return typedParams.session;
        },
      },
      events: {
        // 🔑 Add this line and the import to add credentials provider
        signIn: credentialsSignInCallback(req),
        createUser: async (message) => {
          const user = message.user;

          if (!user.email) {
            return;
          }

          // TODO: Setup Stripe
          // const stripeCustomerId = await setupStripeCustomer(user);
          const resendContactId = await setupResendCustomer(user);

          await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              // stripeCustomerId,
              resendContactId,
            },
          });
        },
      },
      // 🔑 Add this line and the import to add credentials provider
      jwt: credentialsOverrideJwt,
    }) as NextAuthConfig
);
