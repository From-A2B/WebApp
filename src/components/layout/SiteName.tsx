import { LINKS } from '@/utils/NavigationLinks';
import { SiteConfig } from '@/utils/site-config';
import type { MantineBreakpoint } from '@mantine/core';
import { Box, Group, Title } from '@mantine/core';
import Link from 'next/link';
import { LogoSvg } from '../svg/LogoSvg';

export type SiteNameProps = {
  nameVisibleFrom?: MantineBreakpoint;
  logoSize?: number;
};

export const SiteName = ({
  nameVisibleFrom = 'xs',
  logoSize = 24,
}: SiteNameProps) => {
  return (
    <Box
      component={Link}
      href={LINKS.Landing.Landing.href}
      td="inherit"
      c="inherit"
    >
      <Group gap="xs">
        <LogoSvg size={logoSize} />
        <Title
          ta="center"
          order={3}
          tt="uppercase"
          visibleFrom={nameVisibleFrom}
        >
          {SiteConfig.title}
        </Title>
      </Group>
    </Box>
  );
};
