'use client';

import { deleteStepAction } from '@/features/steps/delete/deleteStep.action';
import { stepKeysFactory } from '@/features/steps/stepKeys.factory';
import useNotify from '@/hook/useNotify';
import { useStepStore } from '@/utils/store/stepStore';
import { Button, Group, Modal, Stack, Text, Title } from '@mantine/core';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CrossCircleIcon } from '../icons/crossCircle.icon';

export type DeleteStepModalProps = {};

export const DeleteStepModal = ({}: DeleteStepModalProps) => {
  const queryClient = useQueryClient();

  const { ErrorNotify, SuccessNotify } = useNotify();

  const deleteModalOpened = useStepStore((s) => s.deleteModalOpened);
  const currentStepName = useStepStore((s) => s.currentStepName);
  const stepId = useStepStore((s) => s.currentStepId);
  const tripId = useStepStore((s) => s.currentTripId);
  const CloseDeleteModal = useStepStore((s) => s.CloseDeleteModal);

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const { serverError } = await deleteStepAction({ stepId: stepId || '' });

      if (serverError)
        return ErrorNotify({
          title: 'An error has occurred while deleting the step',
        });
    },
    onSuccess: async () => {
      SuccessNotify({ title: 'Step as been deleted' });
      await queryClient.invalidateQueries({
        queryKey: stepKeysFactory.byTripId(tripId || ''),
      });
      CloseDeleteModal();
    },
  });

  return (
    <Modal.Root opened={deleteModalOpened} onClose={CloseDeleteModal} centered>
      <Modal.Overlay backgroundOpacity={0.55} blur={3} />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>
            <Title order={2}>Confirm delete step</Title>
          </Modal.Title>
          <Modal.CloseButton icon={<CrossCircleIcon />} />
        </Modal.Header>
        <Modal.Body>
          <Stack>
            <Text>Are you sure to delete the '{currentStepName}' step ? </Text>
            <Group justify="end">
              <Button
                variant="outline"
                color="var(--mantine-color-red-5)"
                disabled={isPending}
                onClick={() => CloseDeleteModal()}
              >
                Cancel
              </Button>
              <Button
                variant="outline"
                onClick={() => mutate()}
                disabled={isPending}
              >
                Delete
              </Button>
            </Group>
          </Stack>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
