import { SiteName } from '@/components/layout/SiteName';
import { SwitchThemeIcon } from '@/components/layout/switchThemeIcon/SwitchThemeIcon';
import { AppShellHeader, Group } from '@mantine/core';

export const AuthHeader = () => {
  return (
    <AppShellHeader>
      <Group h="100%" justify="space-between" px="md">
        <Group>
          <SiteName nameVisibleFrom="base" />
        </Group>
        <Group visibleFrom="sm">
          {/* <AuthButtonClient /> */}
            <SwitchThemeIcon />
        </Group>
      </Group>
    </AppShellHeader>
  );
};
