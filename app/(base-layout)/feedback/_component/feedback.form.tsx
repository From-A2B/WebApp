'use client';

import { FeedbackReviewInput } from '@/components/feedback/feedbackReviewInput';
import { sendFeedbackAction } from '@/features/feedback/send-feedback.action';
import type { SendFeedbackSchemaType } from '@/features/feedback/send-feedback.schema';
import { SendFeedbackSchema } from '@/features/feedback/send-feedback.schema';
import useNotify from '@/hook/useNotify';
import {
  Button,
  Center,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export const FeedbackForm = () => {
  const { ErrorNotify, SuccessNotify } = useNotify();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const { data: sessionData } = useSession();
  const email = sessionData?.user.email ?? '';

  const feedbackForm = useForm<SendFeedbackSchemaType>({
    validateInputOnChange: true,
    initialValues: {
      email: email || '',
      message: '',
      review: 0,
    },
    validate: zodResolver(SendFeedbackSchema),
  });

  useEffect(() => {
    if (email) {
      feedbackForm.setFieldValue('email', email);
    }
  }, [email, feedbackForm]);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (values: SendFeedbackSchemaType) => {
      const { data, serverError } = await sendFeedbackAction(values);

      if (!data) {
        ErrorNotify({ title: serverError });
        return;
      }

      SuccessNotify({ title: 'Your feedback has been sent. Thank you.' });
      feedbackForm.reset();
    },
  });

  const isFormValid = feedbackForm.isValid();

  return (
    <>
      {email ? (
        <>
          <Title order={2} my={50} ta="center">
            Leave your feedback
          </Title>
          <TextInput
            disabled
            type="email"
            {...feedbackForm.getInputProps('email')}
            value={feedbackForm.values.email}
          />
          <Textarea
            mt="sm"
            label="Message"
            withAsterisk
            resize={!isMobile ? 'vertical' : 'none'}
            {...feedbackForm.getInputProps('message')}
          />
          <Text
            c={
              feedbackForm.values.message.length >= 500
                ? 'var(--mantine-color-red-5)'
                : 'var(--mantine-color-dimmed)'
            }
            ta="right"
            mt={0}
          >
            {feedbackForm.values.message.length} / 500
          </Text>
          <FeedbackReviewInput
            value={feedbackForm.getInputProps('review').value as number}
            onChange={(v) => {
              feedbackForm.setFieldValue('review', v);
            }}
          />
          <Center mt="md">
            <Button
              variant="outline"
              disabled={!isFormValid || isPending}
              loading={isPending}
              onClick={() => mutateAsync(feedbackForm.values)}
            >
              Send
            </Button>
          </Center>
        </>
      ) : (
        <Text ta="center" c="teal" fw="bold">
          Connect to give your opinion
        </Text>
      )}
    </>
  );
};
