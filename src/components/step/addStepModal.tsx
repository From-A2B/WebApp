'use client';

import { AddStepSchema } from '@/features/steps/add/addStep.schema';
import { GetStepAfterByIdAction } from '@/features/steps/get/getStepAfterById.action';
import { GetStepBeforeByIdAction } from '@/features/steps/get/getStepBeforeById.action';
import { GetStepByIdAction } from '@/features/steps/get/getStepById.action';
import useNotify from '@/hook/useNotify';
import { TransportMode } from '@/types/transportMode.type';
import { useStepStore } from '@/utils/store/stepStore';
import { PlaceData } from '@googlemaps/google-maps-services-js';
import { Button, Group, Modal, Stack, TextInput, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useQuery } from '@tanstack/react-query';
import { CrossCircleIcon } from '../icons/crossCircle.icon';
import { StepsBreadCrumb } from './breadCrumb/stepsBreadCrumb';
import { DestinationInput } from './destinationInput';
import { TransportModeInput } from './transportModeInput';

export type AddStepModalProps = {};

export const AddStepModal = ({}: AddStepModalProps) => {
  const { ErrorNotify } = useNotify();

  const addStepModalOpened = useStepStore((s) => s.addStepModalOpened);
  const CloseAddStepModal = useStepStore((s) => s.CloseAddStepModal);
  const stepId = useStepStore((s) => s.currentStepId);
  const addStepBefore = useStepStore((s) => s.addStepBefore);
  const addStepAfter = useStepStore((s) => s.addStepAfter);
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

  const addStepForm = useForm<AddStepSchema>({
    initialValues: {
      name: '',
      rank: -10000,
      description: undefined,
      latitude: 0,
      longitude: 0,
      transportMode: 'Car',
    },
    validateInputOnChange: true,
    validate: zodResolver(AddStepSchema),
  });

  const handleChangeName = (name: string) => {
    addStepForm.setFieldValue('name', name);
    SetNewStepName(name);
  };

  const handleChangeLocation = (place: Partial<PlaceData>) => {
    console.debug('🚀 ~ handleChangeLocation ~ place:', place);
    if (!place.geometry)
      return ErrorNotify({
        message:
          'impossible to retrieve the location of this place, please choose another one',
      });

    const { location } = place.geometry;
    addStepForm.setFieldValue('latitude', location.lat);
    addStepForm.setFieldValue('longitude', location.lng);
  };

  const handleChangeTransportMode = (transport: TransportMode) => {
    addStepForm.setFieldValue('transportMode', transport);
  };

  const handleCloseModal = () => {
    addStepForm.reset();
    CloseAddStepModal();
  };

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
            beforeStep={stepBefore || undefined}
            afterStep={stepAfter || undefined}
          />

          <Stack>
            <TextInput
              withAsterisk
              label="Step name"
              placeholder="New step name"
              {...addStepForm.getInputProps('name')}
              onChange={(e) => handleChangeName(e.target.value)}
            />
            <TextInput
              label="Description"
              {...addStepForm.getInputProps('description')}
            />
            <DestinationInput
              onChange={(place) => handleChangeLocation(place)}
            />
            <TransportModeInput
              withAsterisk
              label="Choose you're transport mode"
              selectedValue={(value) => handleChangeTransportMode(value)}
            />
            <Group justify="end">
              <Button
                color="var(--mantine-color-red-5)"
                variant="outline"
                onClick={handleCloseModal}
              >
                Cancel
              </Button>
              <Button
                disabled={!addStepForm.isValid()}
                onClick={() => console.log(addStepForm.values)}
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
