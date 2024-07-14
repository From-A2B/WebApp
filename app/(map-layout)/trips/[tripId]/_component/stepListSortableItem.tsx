'use client';

import { CogWheelIcon } from '@/components/icons/cogwheel.icon';
import { StepMenu } from '@/components/step/stepMenu';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  ActionIcon,
  Box,
  Group,
  Paper,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { IconGripVertical } from '@tabler/icons-react';
import { StepCounter } from '../../../../../src/components/step/stepCounter';

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
          <StepMenu stepId={stepId}>
            <ActionIcon variant="transparent">
              <CogWheelIcon
                loop
                colorize={
                  colorScheme === 'dark'
                    ? undefined
                    : 'var(--mantine-primary-color-9)'
                }
              />
            </ActionIcon>
          </StepMenu>
        </Group>
      </Paper>
    </div>
  );
};
