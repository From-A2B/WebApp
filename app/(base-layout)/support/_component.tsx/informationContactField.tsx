import { Group, Stack, Text, Title } from '@mantine/core';
import type { ReactNode } from 'react';

export type InformationContactFieldProps = {
  icon: ReactNode;
  name: string;
  value: string;
};

export const InformationContactField = ({
  icon,
  name,
  value,
}: InformationContactFieldProps) => {
  return (
    <Group>
      {icon}
      <Stack gap={0}>
        <Title order={4}>{name}</Title>
        <Text>{value}</Text>
      </Stack>
    </Group>
  );
};
