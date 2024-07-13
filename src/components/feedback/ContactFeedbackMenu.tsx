'use client';

import { sendFeedbackAction } from '@/features/feedback/send-feedback.action';
import type { SendFeedbackSchemaType } from '@/features/feedback/send-feedback.schema';
import { SendFeedbackSchema } from '@/features/feedback/send-feedback.schema';
import useNotify from '@/hook/useNotify';
import {
  Button,
  Card,
  Group,
  Menu,
  Stack,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import { FeedbackReviewInput } from './FeedbackReviewInput';

type SendFeedbackMenuProps = PropsWithChildren;

export const SendFeedbackMenu = ({ children }: SendFeedbackMenuProps) => {
  const { ErrorNotify, SuccessNotify } = useNotify();
  const [opened, setOpened] = useState(false);

  const session = useSession();
  const email = session.data?.user.email ?? '';

  const feedbackForm = useForm<SendFeedbackSchemaType>({
    validateInputOnChange: true,
    initialValues: {
      email: email,
      message: '',
      review: 0,
    },
    validate: zodResolver(SendFeedbackSchema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (values: SendFeedbackSchemaType) => {
      const { data, serverError } = await sendFeedbackAction(values);

      if (!data) {
        ErrorNotify({ title: serverError });
        return;
      }

      SuccessNotify({ title: 'Your feedback has been sent. Thanks you.' });
      feedbackForm.reset();
      setOpened(false);
    },
  });

  return (
    <Menu
      onClose={() => feedbackForm.reset()}
      opened={opened}
      onChange={setOpened}
    >
      <Menu.Target>
        {children ? children : <Button variant="outline">Feedback</Button>}
      </Menu.Target>
      <Menu.Dropdown>
        <Card w="20em">
          <Stack>
            <TextInput
              type="email"
              label="Email"
              withAsterisk
              {...feedbackForm.getInputProps('email')}
            />
            <Textarea
              label="Message"
              withAsterisk
              {...feedbackForm.getInputProps('message')}
            />
          </Stack>
          <Card.Section mt="xl">
            <Group p="xs" justify="space-between" align="center">
              <FeedbackReviewInput
                value={feedbackForm.getInputProps('review').value as number}
                onChange={(v) => {
                  feedbackForm.setFieldValue('review', v);
                }}
              />
              <Button
                variant="outline"
                disabled={!feedbackForm.isValid() || isPending}
                loading={isPending}
                onClick={() => mutateAsync(feedbackForm.values)}
              >
                Send
              </Button>
            </Group>
          </Card.Section>
        </Card>
      </Menu.Dropdown>
    </Menu>
  );
};
