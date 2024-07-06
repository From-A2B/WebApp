'use client';

import { contactSupportAction } from '@/features/contact/support/contact-support.action';
import { ContactSupportSchema } from '@/features/contact/support/contact-support.schema';
import useNotify from '@/hook/useNotify';
import {
  Box,
  Button,
  ButtonGroup,
  Group,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';

export type ContactFormProps = {
  name: string | null | undefined;
  email: string | null | undefined;
};

export const ContactForm = ({ email, name }: ContactFormProps) => {
  const { ErrorNotify, SuccessNotify } = useNotify();

  const contactForm = useForm<ContactSupportSchema>({
    initialValues: {
      name: name || '',
      email: email || '',
      subject: '',
      message: '',
    },
    validateInputOnChange: true,
    validate: zodResolver(ContactSupportSchema),
  });

  const { mutate: sendMail, isPending } = useMutation({
    mutationFn: (input: ContactSupportSchema) => contactSupportAction(input),
    onError: () =>
      ErrorNotify({
        title: 'Error',
        message: 'Failed to send message',
      }),
    onSuccess: () => {
      SuccessNotify({
        title: 'Success',
        message: 'Message sent successfully',
      });
      contactForm.reset();
    },
  });

  return (
    <>
      <Box>
        <Group>
          <TextInput
            withAsterisk
            label="Name"
            placeholder="you're name"
            disabled={!!name}
            {...contactForm.getInputProps('name')}
          />
          <TextInput
            withAsterisk
            label="Email"
            placeholder="you're mail"
            disabled={!!email}
            {...contactForm.getInputProps('email')}
          />
        </Group>
        <TextInput
          withAsterisk
          label="Subject"
          placeholder="the subject of your message"
          {...contactForm.getInputProps('subject')}
        />
        <Textarea
          withAsterisk
          label="Message"
          placeholder="the subject of your message"
          autosize
          minRows={2}
          maxRows={10}
          resize="vertical"
          {...contactForm.getInputProps('message')}
        />
      </Box>
      <div className="flex flex-row justify-end">
        <ButtonGroup>
          <Button color="var(--mantine-color-red-5)" disabled={isPending}>
            Clear
          </Button>
          <Button
            loading={isPending}
            disabled={!contactForm.isValid()}
            onClick={() => sendMail(contactForm.values)}
          >
            Send
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};
