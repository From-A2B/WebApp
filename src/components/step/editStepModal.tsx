'use client';

import { GetStepByIdAction } from '@/features/steps/get/getStepById.action';
import { GetStepOrderAction } from '@/features/steps/get/getStepOrder.action';
import { stepKeysFactory } from '@/features/steps/stepKeys.factory';
import { EditStepNameSchema } from '@/features/steps/update/edit/name/editStepName.action';
import useNotify from '@/hook/useNotify';
import { useStepStore } from '@/utils/store/stepStore';
import {
  Button,
  Fieldset,
  Group,
  Modal,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { CrossCircleIcon } from '../icons/crossCircle.icon';
import { DestinationInput } from './destinationInput';
import { StepCounter } from './stepCounter';
import { TransportModeInput } from './transportModeInput';

export type EditStepModalProps = {};

export const EditStepModal = ({}: EditStepModalProps) => {
  const { ErrorNotify, SuccessNotify } = useNotify();
  const queryClient = useQueryClient();

  const editModalOpened = useStepStore((s) => s.editModalOpened);
  const CloseEditModal = useStepStore((s) => s.CloseEditModal);
  const stepId = useStepStore((s) => s.currentStepId);

  const { data: step, isPending: isPendingStep } = useQuery({
    queryKey: stepKeysFactory.byId(stepId || ''),
    queryFn: async () => {
      if (!stepId)
        return ErrorNotify({
          title: 'Unable to retrieve current step',
        });

      const { data, serverError } = await GetStepByIdAction({ stepId });
      if (serverError) return ErrorNotify({ title: serverError });
      if (!data)
        return ErrorNotify({
          title: 'Unable to retrieve current step',
        });

      return data;
    },

    enabled: !!stepId,
  });
  const { data: stepOrder, isPending: isPendingStepOrder } = useQuery({
    queryKey: stepKeysFactory.stepOrder(stepId || ''),
    queryFn: async () => {
      if (!stepId)
        return ErrorNotify({
          title: 'Unable to retrieve current step',
        });

      const { data, serverError } = await GetStepOrderAction({ stepId });
      if (serverError) return ErrorNotify({ title: serverError });
      if (!data)
        return ErrorNotify({
          title: 'Unable to retrieve current step order',
        });

      return data;
    },
    enabled: !!stepId,
  });

  const handleCloseModal = () => {
    CloseEditModal();

    if (!step?.id)
      queryClient.invalidateQueries({
        queryKey: stepKeysFactory.byTripId(step?.id!),
      });
  };

  //#region StepName
  const stepNameForm = useForm<EditStepNameSchema>({
    initialValues: {
      name: step?.name || '',
      stepId: step?.id || '',
    },
    validateInputOnChange: true,
    validate: zodResolver(EditStepNameSchema),
  });

  // const { mutate: changeName, isPending: isPendingChangeName } = useMutation({
  //   mutationFn: async () => {
  //     const { data, serverError } = await EditStepNameAction({
  //       ...stepNameForm.values,
  //     });

  //     if (serverError) return ErrorNotify({ title: serverError });

  //     return data;
  //   },
  // });

  // const [nameDebounced] = useDebouncedValue(stepNameForm.values.name, 300);
  // useEffect(() => {
  //   if (stepNameForm.isValid()) changeName();
  // }, [nameDebounced]);

  //#endregion

  return (
    <Modal.Root opened={editModalOpened} onClose={handleCloseModal} centered>
      <Modal.Overlay backgroundOpacity={0.55} blur={3} />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>
            <Title order={2}>Step Edit</Title>
          </Modal.Title>
          <Modal.CloseButton icon={<CrossCircleIcon />} />
        </Modal.Header>
        <Modal.Body>
          <Fieldset legend="Step details">
            <Stack>
              <Group>
                <Text fw={600}>Step number : </Text>
                <StepCounter
                  order={
                    isPendingStepOrder ? undefined : stepOrder || undefined
                  }
                />
              </Group>
              <TextInput
                label="Step name"
                withAsterisk
                {...stepNameForm.getInputProps('name')}
              />
              <TextInput label="Description" />
            </Stack>
          </Fieldset>
          <Fieldset legend="Location">
            <DestinationInput onChange={() => {}} />
          </Fieldset>
          <Fieldset legend="Mode of transport">
            <TransportModeInput
              label="Choose your mode of transport"
              withAsterisk
              selectedValue={() => {}}
            />
          </Fieldset>
          <Button disabled={!stepNameForm.isValid()}>Test form</Button>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
