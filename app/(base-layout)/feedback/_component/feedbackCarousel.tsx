'use client';

import type { RandomFeedback } from '@/features/feedback/get/getRamdomFeedback.query';
import { GetRandomFeedBackAction } from '@/features/feedback/get/getRandomFeedback.action';
import { Carousel } from '@mantine/carousel';
import {
  Badge,
  Card,
  Center,
  Group,
  Loader,
  Rating,
  Text,
} from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import useNotify from '@/hook/useNotify';

export const FeedbackCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const { ErrorNotify } = useNotify();

  const { data: feedbacks, error } = useQuery({
    queryKey: ['randomFeedback'],
    queryFn: async () => {
      const { data: feedbackData, serverError } = await GetRandomFeedBackAction({
        take: 50,
      });

      if (!feedbackData || serverError) {
        ErrorNotify({
          message: 'An error occurred while fetching feedbacks.',
        });
        return [];
      }

      return feedbackData;
    },
  });

  if (error || !feedbacks) {
    return (
      <Center>
        <Loader size="xl" mt="xl" />
      </Center>
    );
  }

  return (
    <Carousel
      slideSize="70%"
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      height={200}
      slideGap="md"
      loop
      mt="md"
      mb="md"
    >
      {feedbacks.map((feedback: RandomFeedback) => (
        <Carousel.Slide key={feedback.userId}>
          <Card shadow="sm" radius="md" withBorder h={190}>
            <Card.Section mah="70%">
              <Text size="md" m={20}>
                {feedback.message}
              </Text>
            </Card.Section>
            <Group mt="auto" justify="space-between">
              <Group>
                <Badge bg="dark">{feedback.user?.name}</Badge>
                <Text size="sm" c="dimmed">
                  {new Date(feedback.createdAt).toLocaleDateString()}
                </Text>
              </Group>
              <Rating
                color="teal"
                value={feedback.review || 0}
                readOnly
                title="Rating given by the customer"
              />
            </Group>
          </Card>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
