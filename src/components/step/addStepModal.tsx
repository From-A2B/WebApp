'use client';

import { AddStepAction } from '@/features/steps/add/addStep.action';
import { AddStepSchema } from '@/features/steps/add/addStep.schema';
import { GetStepAfterByIdAction } from '@/features/steps/get/getStepAfterById.action';
import { GetStepBeforeByIdAction } from '@/features/steps/get/getStepBeforeById.action';
import { GetStepByIdAction } from '@/features/steps/get/getStepById.action';
import { stepKeysFactory } from '@/features/steps/stepKeys.factory';
import useNotify from '@/hook/useNotify';
import type { TransportMode } from '@/types/transportMode.type';
import { useStepStore } from '@/utils/store/stepStore';
import type { PlaceData } from '@googlemaps/google-maps-services-js';
import { Button, Group, Modal, Stack, TextInput, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CrossCircleIcon } from '../icons/crossCircle.icon';
import { TrashIcon } from '../icons/trash.icon';
import { StepsBreadCrumb } from './breadCrumb/stepsBreadCrumb';
import { DestinationInput } from './destinationInput';
import { TransportModeInput } from './transportModeInput';

export type AddStepModalProps = {};

export const AddStepModal = ({}: AddStepModalProps) => {
  const queryClient = useQueryClient();

  const { ErrorNotify, SuccessNotify } = useNotify();

  const addStepModalOpened = useStepStore((s) => s.addStepModalOpened);
  const CloseAddStepModal = useStepStore((s) => s.CloseAddStepModal);
  const stepId = useStepStore((s) => s.currentStepId);
  const tripId = useStepStore((s) => s.currentTripId);
  const addStepBefore = useStepStore((s) => s.addStepBefore);
  const addStepAfter = useStepStore((s) => s.addStepAfter);
  const SetNewStepName = useStepStore((s) => s.SetNewStepName);

  const { data: stepBefore, isPending: isPendingStepBefore } = useQuery({
    queryKey: stepKeysFactory.stepBefore(stepId!),
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
    queryKey: stepKeysFactory.stepAfter(stepId!),
    queryFn: async () => {
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

  const addStepForm = useForm<AddStepSchema>({
    initialValues: {
      name: '',
      rank: -10000,
      description: undefined,
      latitude: 0,
      longitude: 0,
      placeId: '',
      transportMode: 'Car',
    },
    validateInputOnChange: true,
    validate: zodResolver(AddStepSchema),
  });

  const handleChangeName = (name: string) => {
    addStepForm.setFieldValue('name', name);
    SetNewStepName(name);
  };

  const handleChangeLocation = (place: Partial<PlaceData> | null) => {
    if (!place) {
      addStepForm.setFieldValue('latitude', 0);
      addStepForm.setFieldError('latitude', '');

      addStepForm.setFieldValue('longitude', 0);
      addStepForm.setFieldError('longitude', '');

      addStepForm.setFieldValue('placeId', '');
      addStepForm.setFieldError('placeId', '');

      return;
    }

    if (!place.geometry || !place.place_id)
      return ErrorNotify({
        message:
          'impossible to retrieve the location of this place, please choose another one',
      });

    const { location } = place.geometry;
    addStepForm.setFieldValue('latitude', location.lat);
    addStepForm.setFieldValue('longitude', location.lng);
    addStepForm.setFieldValue('placeId', place.place_id);
  };

  const handleChangeTransportMode = (transport: TransportMode) => {
    addStepForm.setFieldValue('transportMode', transport);
  };

  const handleClearFormName = () => {
    SetNewStepName('New Step');
    addStepForm.setFieldValue('name', '');
    addStepForm.setFieldError('name', '');
  };

  const handleClearFormDescription = () => {
    addStepForm.setFieldValue('description', '');
    addStepForm.setFieldError('description', '');
  };

  const handleCloseModal = () => {
    addStepForm.reset();
    CloseAddStepModal();
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const { serverError } = await AddStepAction({
        beforeStepId: stepBefore?.id,
        afterStepId: stepAfter?.id,
        tripId: tripId || '',
        newStep: addStepForm.values,
      });

      if (serverError)
        return ErrorNotify({ title: 'An error occurred when adding the step' });
    },
    onSuccess: async () => {
      SuccessNotify({ title: 'The step was well added' });
      handleCloseModal();
      await queryClient.invalidateQueries({
        queryKey: stepKeysFactory.byTripId(tripId || ''),
      });
    },
  });

  return (
    <Modal.Root
      opened={addStepModalOpened}
      onClose={handleCloseModal}
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
          <StepsBreadCrumb
            beforeStep={
              isPendingStepBefore ? undefined : stepBefore || undefined
            }
            afterStep={isPendingStepAfter ? undefined : stepAfter || undefined}
          />

          <Stack>
            <TextInput
              withAsterisk
              label="Step name"
              placeholder="New step name"
              rightSection={
                !!addStepForm.values.name.length && (
                  <TrashIcon onClick={handleClearFormName} />
                )
              }
              {...addStepForm.getInputProps('name')}
              onChange={(e) => handleChangeName(e.target.value)}
            />
            <TextInput
              label="Description"
              rightSection={
                !!addStepForm.values.description?.length && (
                  <TrashIcon onClick={handleClearFormDescription} />
                )
              }
              {...addStepForm.getInputProps('description')}
            />
            <DestinationInput
              onChangeDestination={(place) => handleChangeLocation(place)}
            />
            <TransportModeInput
              withAsterisk
              defaultValue="Car"
              label="Choose you're transport mode"
              selectedValue={(value) => handleChangeTransportMode(value)}
            />
            <Group justify="end">
              <Button
                color="var(--mantine-color-red-5)"
                variant="outline"
                onClick={handleCloseModal}
                disabled={isPending}
              >
                Cancel
              </Button>
              <Button
                disabled={!addStepForm.isValid() || isPending}
                onClick={() => mutate()}
              >
                Add
              </Button>
            </Group>
          </Stack>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
