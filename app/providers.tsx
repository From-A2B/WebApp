import { queryClient } from '@/lib/ReactQuery';
import { env } from '@/lib/env/server';
import { themes } from '@/styles/themes';
import { MantineBreakpointIndicator } from '@/utils/MantineBreakpointIndicator';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/core/styles.layer.css';
import '@mantine/dates/styles.css';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';
import type { PropsWithChildren } from 'react';
import './globals.scss';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <MantineProvider theme={themes} defaultColorScheme="dark" withGlobalClasses>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <Notifications limit={5} position="top-right" />
          <ReactQueryDevtools initialIsOpen={false} />

          {children}
          {env.NODE_ENV === 'development' && <MantineBreakpointIndicator />}
        </SessionProvider>
      </QueryClientProvider>
    </MantineProvider>
  );
};
