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
import { Center, LoadingOverlay, ScrollArea, Stack } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { LoaderDotsIcon } from '~/src/components/icons/loaderDots.icon';
import type { GetOneTripByIdQuery } from '~/src/features/trips/get/getOneTripById.query';
import { StepMoveAction } from '~/src/features/trips/steps/stepMove.action';
import useNotify from '~/src/hook/useNotify';
import { StepListSortableItem } from './stepListSortableItem';

export type StepListSortableProps = {
  trip: GetOneTripByIdQuery;
};

export const StepListSortable = ({ trip }: StepListSortableProps) => {
  const { ErrorNotify } = useNotify();

  const [items, setItems] = useState(
    trip.steps.sort((a, b) => a.rank - b.rank)
  );

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const { mutate, isPending } = useMutation({
    mutationFn: async ({
      stepId,
      upItemRank,
      downItemRank,
    }: {
      stepId: string;
      upItemRank?: number;
      downItemRank?: number;
    }) => StepMoveAction({ stepId, upItemRank, downItemRank }),

    onSuccess({ data, serverError }, { stepId }) {
      if (serverError) return ErrorNotify({ message: serverError });
      if (!data) return;

      setItems((prev) => {
        const activeItem = prev.find((item) => item.id === stepId);

        if (!activeItem) return prev as [];

        activeItem.rank = data;

        return [...prev] as [];
      });
    },
  });

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;

    if (!over) return ErrorNotify({ message: 'Invalid drop target' });

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIdx: number = items.findIndex((item) => item.id === active.id);
        const newIdx: number = items.findIndex((item) => item.id === over.id);

        const newItems = arrayMove(items, oldIdx, newIdx);

        const upItemRank = newItems[newIdx - 1]?.rank;
        const downItemRank = newItems[newIdx + 1]?.rank;

        mutate({
          stepId: String(active.id),
          upItemRank,
          downItemRank,
        });

        return newItems;
      });
    }
  };

  return (
    <ScrollArea h="83vh" w="100%" offsetScrollbars>
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
              disabled={isPending}
            >
              {items.map((step, idx) => (
                <StepListSortableItem
                  key={step.id}
                  stepId={step.id}
                  order={idx + 1}
                  name={step.name}
                />
              ))}
            </SortableContext>
            <LoadingOverlay
              visible={isPending}
              zIndex={1000}
              overlayProps={{ radius: 'sm', blur: 2 }}
              loaderProps={{
                children: <LoaderDotsIcon size={100} loop forceLoopStart />,
              }}
            />
          </DndContext>
        </Stack>
      </Center>
    </ScrollArea>
  );
};
