'use client';

import { Box, Group, Paper, Text, useMantineColorScheme } from '@mantine/core';
import { IconGripVertical } from '@tabler/icons-react';
import { CogWheelIcon } from '~/src/components/icons/cogwheel.icon';
import { StepCounter } from './stepCounter';

export type StepListSortableItemProps = {
  stepId: string;
  order: number;
  name: string;
};

export const StepListSortableItem = ({
  stepId,
  name,
  order,
}: StepListSortableItemProps) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Paper key={stepId} withBorder shadow="xl" p="md">
      <Group justify="space-between">
        <Box>
          <Group>
            <IconGripVertical className="cursor-pointer" />
            <StepCounter order={order} />
            <Text fw={500} className="text-base">
              {name}
            </Text>
          </Group>
        </Box>
        <CogWheelIcon
          loop
          colorize={
            colorScheme === 'dark'
              ? undefined
              : 'var(--mantine-primary-color-9)'
          }
        />
      </Group>
    </Paper>
  );
};
