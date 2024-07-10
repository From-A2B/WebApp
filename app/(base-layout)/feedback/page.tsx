import {
  Center,
  Container,
  Rating,
  Text,
  Title,
} from '@mantine/core';
import { FeedbackForm } from './_component/feedback.form';
import type { PageParams } from '~/src/types/next';
import { GetAverageFeedbackRatingQuery } from '~/src/features/feedback/get/getAverageFeedback.query';
import { FeedbackCarousel } from './_component/FeedbackCarousel';

const RoutePage = async ({}: PageParams) => {

  const averageRating = await GetAverageFeedbackRatingQuery();

  return (
    <Container size="md">
      <Title order={1} ta="center" mt="md">
        Your feedback
      </Title>
      <Text mt="sm" ta="center" c="teal" fw={700}>
        Discover what our customers say about us.
      </Text>
      <Title order={3} mt="xl" ta="center">
        Rating given by our customers
      </Title>
      <Center mt="md" mb="xl">
        <Rating
          value={averageRating}
          readOnly
          color="teal"
          size={50}
          title="Average rating"
        />
      </Center>
      <FeedbackCarousel />
      <FeedbackForm />
    </Container>
  );
};

export default RoutePage;
