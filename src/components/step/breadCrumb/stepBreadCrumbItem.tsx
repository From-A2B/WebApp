'use client';

import { Paper, Stack, Text } from '@mantine/core';
import { StepCounter } from '../stepCounter';

export type StepBreadCrumbItemProps = {
  name: string;
  order?: number;
};

export const StepBreadCrumbItem = ({
  name,
  order,
}: StepBreadCrumbItemProps) => {
  return (
    <Paper withBorder py="sm" px="md" shadow="xl" className="w-44">
      <Stack gap={0} align="center">
        <StepCounter order={order} />

        <Text fw={600} fs="italic" className="select-none">
          {name}
        </Text>
      </Stack>
    </Paper>
  );
};
