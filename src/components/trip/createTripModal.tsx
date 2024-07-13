'use client';

import {
  Button,
  Modal,
  Stack,
  TextInput,
  Textarea,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { CheckIcon } from '~/public/images/checkIcon';
import { TrashIcon } from '~/public/images/trashIcon';
import { CreateTripAction } from '@/features/trips/create/createTrip.action';
import { CreateTripSchema } from '@/features/trips/create/createTrip.schema';
import useNotify from '@/hook/useNotify';
import { DatePickerInput } from '@mantine/dates';
import { useForm, zodResolver } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import moment from 'moment';
import { CrossCircleIcon } from '../icons/crossCircle.icon';

export type CreateTripModalProps = {
  opened: boolean;
  close: () => void;
};

export const CreateTripModal = ({ opened, close }: CreateTripModalProps) => {
  const { SuccessNotify, ErrorNotify } = useNotify();

  const [
    hoveredCloseButton,
    { open: openHoverCloseButton, close: closeHoverCloseButton },
  ] = useDisclosure(false);
  const [
    hoveredConfirmCreate,
    { open: openHoverConfirmCreate, close: closeHoverConfirmCreate },
  ] = useDisclosure(false);

  const createTripForm = useForm<CreateTripSchema>({
    mode: 'controlled',
    initialValues: {
      title: '',
      startDate: moment().toDate(),
    },
    validateInputOnChange: true,
    validate: zodResolver(CreateTripSchema),
  });

  const handleClose = () => {
    createTripForm.reset();
    close();
  };

  const handleResetTitle = () => {
    createTripForm.setFieldValue('title', '');
  };
  const handleResetDescription = () => {
    createTripForm.setFieldValue('description', '');
  };
  const handleResetStartDate = () => {
    createTripForm.setFieldValue('startDate', moment().toDate());
  };

  const { mutateAsync: CreateTripAsync } = useMutation({
    mutationFn: async (tripDto: CreateTripSchema) => {
      const { data: newTrip, serverError } = await CreateTripAction({
        tripDto,
      });

      if (serverError) return ErrorNotify({ message: serverError });

      handleClose();
      return SuccessNotify({
        title: `Trip ${newTrip?.name} successful creation`,
      });
    },
  });

  return (
    <Modal.Root opened={opened} onClose={handleClose} centered>
      <Modal.Overlay backgroundOpacity={0.55} blur={3} />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>
            <Title>Create my trip</Title>
          </Modal.Title>
          <Modal.CloseButton
            icon={<CrossCircleIcon isHover={hoveredCloseButton} />}
            onMouseEnter={openHoverCloseButton}
            onMouseLeave={closeHoverCloseButton}
          />
        </Modal.Header>
        <Modal.Body>
          <Stack>
            <TextInput
              withAsterisk
              label="Title"
              description="Enter your trip name"
              placeholder={`Summer ${moment().year()}`}
              rightSection={
                !!createTripForm.getValues().title.length && (
                  <TrashIcon size={20} onClick={handleResetTitle} />
                )
              }
              {...createTripForm.getInputProps('title')}
            />
            <Textarea
              label="Description"
              description="Enter your trip description"
              placeholder="With my friends"
              autosize
              minRows={2}
              maxRows={4}
              rightSection={
                !!createTripForm.getValues().description?.length && (
                  <TrashIcon size={20} onClick={handleResetDescription} />
                )
              }
              {...createTripForm.getInputProps('description')}
            />
            <DatePickerInput
              withAsterisk
              label="Beginning date"
              description="Enter your beginning date"
              placeholder={moment().format('YYYY, MMMM D')}
              valueFormat="YYYY, MMMM D"
              clearable
              rightSection={
                !!createTripForm.getValues().startDate.getTime() && (
                  <TrashIcon size={20} onClick={handleResetStartDate} />
                )
              }
              {...createTripForm.getInputProps('startDate')}
            />

            <Button
              variant="outline"
              onMouseEnter={openHoverConfirmCreate}
              onMouseLeave={closeHoverConfirmCreate}
              leftSection={
                <CheckIcon
                  colorize="teal"
                  isHover={hoveredConfirmCreate}
                  disabled={!createTripForm.isValid()}
                />
              }
              disabled={!createTripForm.isValid()}
              onClick={() => CreateTripAsync(createTripForm.values)}
            >
              Confirm
            </Button>
          </Stack>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
