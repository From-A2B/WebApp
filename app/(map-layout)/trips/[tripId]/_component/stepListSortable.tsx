/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
'use client';

import type { DragEndEvent } from '@dnd-kit/core';
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
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Center, ScrollArea, Stack } from '@mantine/core';
import { useState } from 'react';
import type { GetOneTripByIdQuery } from '~/src/features/trips/get/getOneTripById.query';
import useNotify from '~/src/hook/useNotify';
import { StepListSortableItem } from './stepListSortableItem';

export type StepListSortableProps = {
  trip: GetOneTripByIdQuery;
};

export const StepListSortable = ({ trip }: StepListSortableProps) => {
  const { ErrorNotify } = useNotify();

  const [items, setItems] = useState(trip.steps);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;

    if (!over) return ErrorNotify({ message: 'Invalid drop target' });

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIdx = items.findIndex((item) => item.id === active.id);
        const newIdx = items.findIndex((item) => item.id === over.id);

        const newItems = arrayMove(items, oldIdx, newIdx);

        return newItems;
      });
    }
  };

  return (
    <ScrollArea h="83vh" w="100%">
      <Center>
        <Stack gap="md" w="100%">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={items}
              strategy={verticalListSortingStrategy}
            >
              {items.map((step) => (
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
