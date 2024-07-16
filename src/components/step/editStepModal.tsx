'use client';

import { GetStepByIdAction } from '@/features/steps/get/getStepById.action';
import { GetStepOrderAction } from '@/features/steps/get/getStepOrder.action';
import { stepKeysFactory } from '@/features/steps/stepKeys.factory';
import { EditStepDescAction } from '@/features/steps/update/edit/description/editStepDesc.action';
import { EditStepDescSchema } from '@/features/steps/update/edit/description/editStepDesc.schema';
import { EditStepNameAction } from '@/features/steps/update/edit/name/editStepName.action';
import { EditStepNameSchema } from '@/features/steps/update/edit/name/editStepName.schema';
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
  Textarea,
  Title,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useDebouncedValue } from '@mantine/hooks';
import {
  IconCircleCheck,
  IconCircleDashedCheck,
  IconCircleDashedX,
} from '@tabler/icons-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
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
  };

  //#region StepName
  const stepNameForm = useForm<EditStepNameSchema>({
    initialValues: {
      stepId: '',
      name: '',
    },
    validateInputOnChange: true,
    validate: zodResolver(EditStepNameSchema),
  });

  const { mutate: changeName } = useMutation({
    mutationFn: async () => {
      const { data, serverError } = await EditStepNameAction({
        ...stepNameForm.values,
      });

      if (serverError) return ErrorNotify({ title: serverError });

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: stepKeysFactory.byTripId(step?.tripId!),
      });
      queryClient.invalidateQueries({
        queryKey: stepKeysFactory.byId(step?.id!),
      });
    },
  });

  const [nameDebounced] = useDebouncedValue<string>(
    stepNameForm.values.name,
    300
  );
  useEffect(() => {
    if (stepNameForm.isValid()) changeName();
  }, [nameDebounced]);

  const nameValidationIcon = useMemo(() => {
    if (!step || !stepNameForm.values.name)
      return <IconCircleDashedX color="var(--mantine-color-red-7)" />;

    const { name } = step;
    const { name: formName } = stepNameForm.values;

    if (name !== formName)
      return <IconCircleDashedCheck color="var(--mantine-color-orange-7)" />;

    return <IconCircleCheck color="var(--mantine-primary-color-7)" />;
  }, [step, stepNameForm.values.name]);

  //#endregion

  //#region StepDescription
  const stepDescForm = useForm<EditStepDescSchema>({
    initialValues: {
      stepId: '',
      description: '',
    },
    validateInputOnChange: true,
    validate: zodResolver(EditStepDescSchema),
  });

  const { mutate: changeDesc } = useMutation({
    mutationFn: async () => {
      const { data, serverError } = await EditStepDescAction({
        stepId: stepDescForm.values.stepId,
        description: stepDescForm.values.description || '',
      });

      if (serverError) return ErrorNotify({ title: serverError });

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: stepKeysFactory.byTripId(step?.tripId!),
      });
      queryClient.invalidateQueries({
        queryKey: stepKeysFactory.byId(step?.id!),
      });
    },
  });

  const [descDebounced] = useDebouncedValue<string>(
    stepDescForm.values.description,
    300
  );
  useEffect(() => {
    if (stepDescForm.isValid()) changeDesc();
  }, [descDebounced]);

  const descValidationIcon = useMemo(() => {
    if (!step) return null;

    const { description } = step;
    console.debug('🚀 ~ descValidationIcon ~ step:', step.description);
    let { description: formDesc } = stepDescForm.values;

    formDesc = formDesc === undefined ? '' : formDesc;

    if (description !== formDesc)
      return <IconCircleDashedCheck color="var(--mantine-color-orange-7)" />;

    return <IconCircleCheck color="var(--mantine-primary-color-7)" />;
  }, [step?.description, stepDescForm.values.description]);

  //#endregion
  useEffect(() => {
    if (!step) return;

    stepNameForm.setValues({
      name: step.name,
      stepId: step.id,
    });

    stepDescForm.setValues({
      stepId: step.id,
      description: step.description || undefined,
    });
  }, [step]);

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
                rightSection={nameValidationIcon}
                {...stepNameForm.getInputProps('name')}
              />
              <Textarea
                label="Description"
                rightSection={descValidationIcon}
                {...stepDescForm.getInputProps('description')}
              />
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
          <Button disabled={!stepNameForm.isValid()}>Form Valid</Button>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
