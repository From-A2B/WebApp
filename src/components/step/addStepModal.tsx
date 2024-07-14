'use client';

import { GetStepAfterByIdAction } from '@/features/steps/get/getStepAfterById.action';
import { GetStepBeforeByIdAction } from '@/features/steps/get/getStepBeforeById.action';
import { GetStepByIdAction } from '@/features/steps/get/getStepById.action';
import useNotify from '@/hook/useNotify';
import { useStepStore } from '@/utils/store/stepStore';
import { Button, Group, Modal, Stack, TextInput, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { CrossCircleIcon } from '../icons/crossCircle.icon';
import { StepsBreadCrumb } from './breadCrumb/stepsBreadCrumb';

export type AddStepModalProps = {};

export const AddStepModal = ({}: AddStepModalProps) => {
  const { ErrorNotify } = useNotify();

  const addStepModalOpened = useStepStore((s) => s.addStepModalOpened);
  const CloseAddStepModal = useStepStore((s) => s.CloseAddStepModal);
  const stepId = useStepStore((s) => s.currentStepId);
  const addStepBefore = useStepStore((s) => s.addStepBefore);
  const addStepAfter = useStepStore((s) => s.addStepAfter);
  const newStepName = useStepStore((s) => s.newStepName);
  const SetNewStepName = useStepStore((s) => s.SetNewStepName);

  const { data: stepBefore, isPending: isPendingStepBefore } = useQuery({
    queryKey: ['tata'],
    queryFn: async () => {
      const { data, serverError } = addStepBefore
        ? await GetStepBeforeByIdAction({
            stepId: stepId!,
          })
        : await GetStepByIdAction({ stepId: stepId! });

      if (serverError) {
        ErrorNotify({ title: serverError });
        return null;
      }

      return data;
    },
    staleTime: -1,
    enabled: !!stepId,
  });

  const { data: stepAfter, isPending: isPendingStepAfter } = useQuery({
    queryKey: ['titi'],
    queryFn: async () => {
      if (!addStepAfter && !stepBefore) return null;

      const { data, serverError } = addStepAfter
        ? await GetStepAfterByIdAction({
            stepId: stepId!,
          })
        : await GetStepByIdAction({ stepId: stepId! });

      if (serverError) {
        ErrorNotify({ title: serverError });
        return null;
      }

      return data;
    },
    staleTime: -1,
    enabled: !!stepId,
  });

  return (
    <Modal.Root
      opened={addStepModalOpened}
      onClose={CloseAddStepModal}
      centered
      size="auto"
    >
      <Modal.Overlay backgroundOpacity={0.55} blur={3} />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>
            <Title>Create a new step for your trip</Title>
          </Modal.Title>
          <Modal.CloseButton
            icon={<CrossCircleIcon size={36} />}
            ml="xs"
            size={37}
          />
        </Modal.Header>
        <Modal.Body>
          {addStepBefore && !addStepAfter && <Title order={3}>Before</Title>}
          {!addStepBefore && addStepAfter && <Title order={3}>After</Title>}

          <StepsBreadCrumb
            beforeStep={stepBefore || undefined}
            afterStep={stepAfter || undefined}
          />

          <Stack>
            <TextInput
              withAsterisk
              label="Step name"
              placeholder="New step name"
              onChange={(e) => SetNewStepName(e.target.value)}
            />
            <TextInput label="Description" />
            <TextInput withAsterisk label="Destination" />
            <TextInput withAsterisk label="Choose you're transport mode" />
            <Group justify="end">
              <Button color="var(--mantine-color-red-5)" variant="outline">
                Cancel
              </Button>
              <Button>Add</Button>
            </Group>
          </Stack>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
