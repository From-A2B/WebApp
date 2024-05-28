import { env } from '@/lib/env/server';
import { SiteConfig } from '@/utils/site-config';
import type { NextAuthConfig } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { getCredentialsProvider } from './credentialsProvider';

type Providers = NonNullable<NextAuthConfig['providers']>;

export const getNextAuthConfigProviders = (): Providers => {
  const providers: Providers = [];

  if (env.AUTH_GOOGLE_ID && env.AUTH_GOOGLE_SECRET) {
    providers.push(
      GoogleProvider({
        allowDangerousEmailAccountLinking: true,
      })
    );
  }

  if (SiteConfig.auth.password) {
    providers.push(getCredentialsProvider());
  }

  return providers;
};
