/* eslint-disable @typescript-eslint/no-unsafe-call */
'use client';

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Center, ScrollArea, Stack } from '@mantine/core';
import type { GetOneTripByIdQuery } from '~/src/features/trips/get/getOneTripById.query';
import { StepListSortableItem } from './stepListSortableItem';

export type StepListSortableProps = {
  trip: GetOneTripByIdQuery;
};

export const StepListSortable = ({ trip }: StepListSortableProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <ScrollArea h="83vh" w="100%">
      <Center>
        <Stack gap="md" w="100%">
          <DndContext sensors={sensors} collisionDetection={closestCenter}>
            <SortableContext
              items={trip.steps}
              strategy={verticalListSortingStrategy}
            >
              {trip.steps.map((step) => (
                <StepListSortableItem
                  key={step.id}
                  stepId={step.id}
                  order={step.order}
                  name={step.name}
                />
              ))}
            </SortableContext>
          </DndContext>
        </Stack>
      </Center>
    </ScrollArea>
  );
};
