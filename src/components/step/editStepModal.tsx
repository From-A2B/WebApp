'use client';

import { GetPlaceDetailsAction } from '@/features/place/getPlaceDetails.action';
import { PlaceKeysFactory } from '@/features/place/placeKeys.factory';
import { GetStepByIdAction } from '@/features/steps/get/getStepById.action';
import { GetStepOrderAction } from '@/features/steps/get/getStepOrder.action';
import { stepKeysFactory } from '@/features/steps/stepKeys.factory';
import { EditStepDescAction } from '@/features/steps/update/edit/description/editStepDesc.action';
import { EditStepDescSchema } from '@/features/steps/update/edit/description/editStepDesc.schema';
import { EditStepDestinationAction } from '@/features/steps/update/edit/destination/editStepDestination.action';
import { EditStepDestinationSchema } from '@/features/steps/update/edit/destination/editStepDestination.schema';
import { EditStepNameAction } from '@/features/steps/update/edit/name/editStepName.action';
import { EditStepNameSchema } from '@/features/steps/update/edit/name/editStepName.schema';
import { EditStepTransportModeAction } from '@/features/steps/update/edit/transportMode/editStepTransportMode.action';
import { EditStepTransportModeSchema } from '@/features/steps/update/edit/transportMode/editStepTransportMode.schema';
import useNotify from '@/hook/useNotify';
import { useStepStore } from '@/utils/store/stepStore';
import { PlaceData } from '@googlemaps/google-maps-services-js';
import {
  Fieldset,
  Group,
  Modal,
  Skeleton,
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
    500
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
    1000
  );
  useEffect(() => {
    if (stepDescForm.isValid()) changeDesc();
  }, [descDebounced]);

  const descValidationIcon = useMemo(() => {
    if (!step) return null;

    const { description } = step;
    let { description: formDesc } = stepDescForm.values;

    formDesc = formDesc === undefined ? '' : formDesc;

    if (description !== formDesc)
      return <IconCircleDashedCheck color="var(--mantine-color-orange-7)" />;

    return <IconCircleCheck color="var(--mantine-primary-color-7)" />;
  }, [step?.description, stepDescForm.values.description]);

  //#endregion

  //#region StepDestination
  const stepDestinationForm = useForm<EditStepDestinationSchema>({
    initialValues: {
      stepId: '',
      lat: 0,
      lng: 0,
      placeId: '',
    },
    validateInputOnChange: true,
    validate: zodResolver(EditStepDestinationSchema),
  });

  const { mutate: changeDestination } = useMutation({
    mutationFn: async () => {
      const { data, serverError } = await EditStepDestinationAction({
        stepId: stepDestinationForm.values.stepId,
        lat: stepDestinationForm.values.lat,
        lng: stepDestinationForm.values.lng,
        placeId: stepDestinationForm.values.placeId,
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

  const [destinationDebounced] = useDebouncedValue<string>(
    stepDestinationForm.values.placeId,
    100
  );
  useEffect(() => {
    if (stepDestinationForm.isValid()) changeDestination();
  }, [destinationDebounced]);

  const { data: placeDetails, isPending } = useQuery({
    queryKey: PlaceKeysFactory.byId(step?.placeId!),
    queryFn: async () => {
      const { data, serverError } = await GetPlaceDetailsAction({
        placeId: step?.placeId!,
      });

      if (serverError) return ErrorNotify({ title: serverError });
      if (!data) return ErrorNotify({});

      console.debug('🚀 ~ queryFn: ~ data:', data);
      return data.result;
    },

    enabled: !!step && !!step.placeId,
  });

  const handleChangeDestination = (place: Partial<PlaceData> | null) => {
    stepDestinationForm.setValues({
      lat: place?.geometry?.location.lat,
      lng: place?.geometry?.location.lng,
      placeId: place?.place_id,
    });
  };

  //#endregion

  //#region StepTransportMode
  const stepTransportModeForm = useForm<EditStepTransportModeSchema>({
    initialValues: {
      stepId: '',
      transportMode: 'Car',
    },
    validateInputOnChange: true,
    validate: zodResolver(EditStepTransportModeSchema),
  });

  const { mutate: changeTransportMode } = useMutation({
    mutationFn: async () => {
      const { data, serverError } = await EditStepTransportModeAction({
        stepId: stepTransportModeForm.values.stepId,
        transportMode: stepTransportModeForm.values.transportMode,
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

  const [transportModeDebounced] = useDebouncedValue<string>(
    stepTransportModeForm.values.transportMode,
    100
  );
  useEffect(() => {
    if (stepTransportModeForm.isValid()) changeTransportMode();
  }, [transportModeDebounced]);

  const transportModeValidationIcon = useMemo(() => {
    if (!step) return null;

    const { transportMode } = step;
    const { transportMode: formTransportMode } = stepTransportModeForm.values;

    if (transportMode !== formTransportMode)
      return <IconCircleDashedCheck color="var(--mantine-color-orange-7)" />;

    return <IconCircleCheck color="var(--mantine-primary-color-7)" />;
  }, [step?.transportMode, stepTransportModeForm.values.transportMode]);

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

    stepDestinationForm.setValues({
      stepId: step.id,
      lat: Number(step.latitude),
      lng: Number(step.longitude),
      placeId: step.placeId,
    });

    stepTransportModeForm.setValues({
      stepId: step.id,
      transportMode: step.transportMode,
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
            {isPending ? (
              <Skeleton height={55} />
            ) : (
              <DestinationInput
                value={placeDetails?.formatted_address}
                onChangeDestination={(place) => handleChangeDestination(place)}
                rightSection={null}
              />
            )}
          </Fieldset>
          <Fieldset legend="Mode of transport">
            <TransportModeInput
              label="Choose your mode of transport"
              withAsterisk
              defaultValue={stepTransportModeForm.values.transportMode}
              selectedValue={(value) =>
                stepTransportModeForm.setFieldValue('transportMode', value)
              }
              rightSection={transportModeValidationIcon}
            />
          </Fieldset>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
