import Footer from '@/components/layout/footer/Footer';
import type { LayoutParams } from '@/types/next';
import { AppShell, AppShellMain } from '@mantine/core';
import { LandingHeader } from './_component/header/landingHeader';

const RouteLayout = ({ children }: LayoutParams) => {
  return (
    <AppShell header={{ height: 60 }}>
      <LandingHeader />
      <AppShellMain
        style={{
          background:
            'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-7)',
          position: 'relative',
          zIndex: 1,
          marginBottom: '400px',
        }}
      >
        {children}
      </AppShellMain>
      <Footer />
    </AppShell>
  );
};

export default RouteLayout;
