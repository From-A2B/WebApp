import type { LayoutParams } from '@/types/next';
import { AppShell, AppShellMain, Container } from '@mantine/core';
import { MapHeader } from './_components/layout/mapHeader';

const RouteLayout = ({ children }: LayoutParams) => {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <MapHeader fluid />
      <AppShellMain
        style={{
          background:
            'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-7)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Container size="100vw">{children}</Container>
      </AppShellMain>
    </AppShell>
  );
};

export default RouteLayout;
