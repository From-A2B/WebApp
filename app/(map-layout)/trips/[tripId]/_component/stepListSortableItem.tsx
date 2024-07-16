'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
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
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: stepId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <Paper key={stepId} withBorder shadow="xl" p="md">
        <Group justify="space-between">
          <Box>
            <Group>
              <div
                onClickCapture={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <IconGripVertical {...listeners} className="cursor-pointer" />
              </div>
              <StepCounter order={order} />
              <Text fw={500} className="text-base select-none">
                {name}
              </Text>
            </Group>
          </Box>
          <CogWheelIcon
            {...listeners}
            loop
            colorize={
              colorScheme === 'dark'
                ? undefined
                : 'var(--mantine-primary-color-9)'
            }
          />
        </Group>
      </Paper>
    </div>
  );
};