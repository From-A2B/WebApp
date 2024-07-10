'use client';

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
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import type { RandomFeedback } from '@/features/feedback/get/getRamdomFeedback.query';
import { GetRandomFeedBackAction } from '@/features/feedback/get/getRandomFeedback.action';
import { useQuery } from '@tanstack/react-query';

export const FeedbackCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const {data: feedbacks = [], isPending} = useQuery({
    queryKey: ['randomFeedback'],
    queryFn: async () => {
      const { data: feedbacks, serverError } = await GetRandomFeedBackAction({
        take: 50,
      });

      if (!feedbacks || serverError) {
        //TODO: Error notify
      }

      return feedbacks
    },
  });

  return (
    <>
      {!isPending && feedbacks.length > 0 ? (
        <Carousel
          slideSize="70%"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          height={200}
          slideGap="md"
          loop
          mt="md"
          mb="md">
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
      ) : (
        <Center>
          <Loader size="xl" mt="xl" />
        </Center>
      )}
    </>
  );
};
