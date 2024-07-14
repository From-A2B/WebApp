'use client';

import { GetStepOrderAction } from '@/features/steps/get/getStepOrder.action';
import useNotify from '@/hook/useNotify';
import { useStepStore } from '@/utils/store/stepStore';
import { Group } from '@mantine/core';
import { Step } from '@prisma/client';
import { IconChevronsRight } from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import { StepBreadCrumbItem } from './stepBreadCrumbItem';

export type StepsBreadCrumbProps = {
  beforeStep?: Step;
  afterStep?: Step;
};

export const StepsBreadCrumb = ({
  beforeStep,
  afterStep,
}: StepsBreadCrumbProps) => {
  const { ErrorNotify } = useNotify();

  const newStepName = useStepStore((s) => s.newStepName);

  const { data: beforeStepOrder, isPending: isPendingBeforeStepOrder } =
    useQuery({
      queryKey: ['tuche'],
      queryFn: async () => {
        const { data, serverError } = await GetStepOrderAction({
          stepId: beforeStep!.id,
        });

        if (serverError) {
          ErrorNotify({
            message: 'An error occurred while retrieving the previous step.',
          });
          return null;
        }

        return data;
      },
      staleTime: -1,
      enabled: !!beforeStep,
    });
  const { data: afterStepOrder, isPending: isPendingAfterStepOrder } = useQuery(
    {
      queryKey: ['tuchee'],
      queryFn: async () => {
        const { data, serverError } = await GetStepOrderAction({
          stepId: afterStep!.id,
        });

        if (serverError) {
          ErrorNotify({
            message: 'An error occurred while retrieving the previous step.',
          });
          return null;
        }

        return data;
      },
      staleTime: -1,
      enabled: !!afterStep,
    }
  );

  return (
    <Group justify="space-around">
      {beforeStep && (
        <>
          <StepBreadCrumbItem
            name={beforeStep.name}
            order={beforeStepOrder || undefined}
          />
          <IconChevronsRight />
        </>
      )}
      <StepBreadCrumbItem name={newStepName} order={undefined} />
      {afterStep && (
        <>
          <IconChevronsRight />
          <StepBreadCrumbItem
            name={afterStep.name}
            order={afterStepOrder || undefined}
          />
        </>
      )}
    </Group>
  );
};
