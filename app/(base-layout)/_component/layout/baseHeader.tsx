import AuthButton from '@/components/auth/AuthButton';
import { SiteName } from '@/components/layout/SiteName';
import { SwitchThemeIcon } from '@/components/layout/switchThemeIcon/SwitchThemeIcon';
import { AppShellHeader, Container, Group } from '@mantine/core';

type BaseHeaderProps = {
  size?: string;
  fluid?: boolean;
};

export const BaseHeader = ({ size, fluid }: BaseHeaderProps) => {
  return (
    <AppShellHeader>
      <Container size={size ? size : '90vh'} h="100%" fluid={fluid}>
        <Group h="100%" justify="space-between" px="md">
          <SiteName />
          <Group>
            <SwitchThemeIcon />
            <AuthButton />
          </Group>
        </Group>
      </Container>
    </AppShellHeader>
  );
};
