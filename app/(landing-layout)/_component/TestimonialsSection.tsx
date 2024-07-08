import {
  Container,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { ClientReviews } from './ClientReviews/ClientReviews';

export const TestimonialsSection = () => {
  return (
    <>
      <Container size="xl" py={50}>
        <Stack w="100%" maw={400}>
          <Title order={1} c="teal" fw={900}>What people say about us</Title>
        </Stack>
        <Stack w="100%" maw={600}>
          <Text size="lg" c="teal" mt="sm">
            Discover what our users have to say about their experience with our trip planner.
          </Text>
        </Stack>
        <ClientReviews />
      </Container>
    </>
  );
};
