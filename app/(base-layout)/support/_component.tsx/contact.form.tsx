'use client';

import { CheckIcon } from '@/components/icons/check.icon';
import { TrashIcon } from '@/components/icons/trash.icon';
import { contactSupportAction } from '@/features/contact/support/contact-support.action';
import { ContactSupportSchema } from '@/features/contact/support/contact-support.schema';
import useNotify from '@/hook/useNotify';
import { cn } from '@/lib/utils';
import { LINKS } from '@/utils/NavigationLinks';
import {
  Box,
  Button,
  ButtonGroup,
  Group,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export type ContactFormProps = {
  name: string | null | undefined;
  email: string | null | undefined;
};

export const ContactForm = ({ email, name }: ContactFormProps) => {
  const router = useRouter();
  const { ErrorNotify, SuccessNotify } = useNotify();

  const [clearHovered, { open: openClearHovered, close: closeClearHovered }] =
    useDisclosure(false);
  const [sendHovered, { open: openSendHovered, close: closeSendHovered }] =
    useDisclosure(false);

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
    onSuccess() {
      SuccessNotify({
        title: 'Success',
        message: 'Message sent successfully',
      });
      contactForm.reset();
      router.push(LINKS.Landing.Landing.href);
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
            rightSection={
              contactForm.values.name &&
              !name && (
                <TrashIcon
                  onClick={() => contactForm.setFieldValue('name', name || '')}
                />
              )
            }
            {...contactForm.getInputProps('name')}
          />
          <TextInput
            withAsterisk
            label="Email"
            placeholder="you're mail"
            disabled={!!email}
            rightSection={
              contactForm.values.email &&
              !email && (
                <TrashIcon
                  onClick={() =>
                    contactForm.setFieldValue('email', email || '')
                  }
                />
              )
            }
            {...contactForm.getInputProps('email')}
          />
        </Group>
        <TextInput
          withAsterisk
          label="Subject"
          placeholder="the subject of your message"
          rightSection={
            contactForm.values.subject && (
              <TrashIcon
                onClick={() => contactForm.setFieldValue('subject', '')}
              />
            )
          }
          {...contactForm.getInputProps('subject')}
        />
        <Box>
          <Textarea
            withAsterisk
            label="Message"
            placeholder="the subject of your message"
            autosize
            minRows={2}
            maxRows={10}
            resize="vertical"
            rightSection={
              contactForm.values.message && (
                <TrashIcon
                  onClick={() => contactForm.setFieldValue('message', '')}
                />
              )
            }
            {...contactForm.getInputProps('message')}
          />
          <p
            className={cn(
              contactForm.values.message.length >= 500
                ? 'text-red-500'
                : 'text-zinc-600',
              'text-right mt-0'
            )}
          >
            {contactForm.values.message.length} / 500
          </p>
        </Box>
      </Box>
      <div className="flex flex-row justify-end">
        <ButtonGroup>
          <Button
            color="var(--mantine-color-red-5)"
            disabled={isPending}
            onClick={() => contactForm.reset()}
            onMouseEnter={openClearHovered}
            onMouseLeave={closeClearHovered}
            leftSection={
              <TrashIcon
                isHover={clearHovered}
                colorize="var(--mantine-color-white)"
              />
            }
          >
            Clear
          </Button>
          <Button
            loading={isPending}
            disabled={!contactForm.isValid()}
            onClick={() => sendMail(contactForm.values)}
            onMouseEnter={openSendHovered}
            onMouseLeave={closeSendHovered}
            leftSection={
              <CheckIcon
                disabled={!contactForm.isValid()}
                isHover={sendHovered}
              />
            }
          >
            Send
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};
