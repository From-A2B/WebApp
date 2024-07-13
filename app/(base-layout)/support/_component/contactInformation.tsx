'use client';

import { cn } from '@/lib/utils';
import {
  Box,
  Stack,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMail, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react';
import { InformationContactField } from './informationContactField';

export type ContactInformationProps = {};

export const ContactInformation = ({}: ContactInformationProps) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box
      visibleFrom="md"
      mr="md"
      p="md"
      className={cn(
        'rounded-2xl bg-gradient-to-tr',
        colorScheme === 'light'
          ? 'from-[#282a29]'
          : 'from-[var(--mantine-color-black)]',
        colorScheme === 'light'
          ? 'to-[var(--mantine-primary-color-6)]'
          : 'to-[var(--mantine-primary-color-9)]'
      )}
    >
      <Title order={4}>Contact Information</Title>
      <Stack>
        <InformationContactField
          icon={<IconMail />}
          name="Email"
          value="contact@from-A2B.com"
        />
        <InformationContactField
          icon={<IconPhone />}
          name="Phone number"
          value="+33 1 23 45 67 89"
        />
        <InformationContactField
          icon={<IconMapPin />}
          name="Address"
          value="In the cloud, Earth"
        />
        <InformationContactField
          icon={<IconSun />}
          name="Office time"
          value="Mon - Fri : 9:00 - 18:00"
        />
      </Stack>
    </Box>
  );
};
