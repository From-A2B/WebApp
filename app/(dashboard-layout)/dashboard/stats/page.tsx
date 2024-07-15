import { requiredAuth } from '@/lib/auth/helper';
import type { PageParams } from '@/types/next';
import { Container, Divider, Group, Paper, Stack, Title, Text, Button } from '@mantine/core';

const RoutePage = async ({}: PageParams) => {
  const user = await requiredAuth();
  const isEmailNotVerified = user.email && !user.emailVerified;

  return (
    <Container>
      {isEmailNotVerified && (
        <Stack>
          <Title>Stats</Title>
          <Divider mb="md" />
          <Group>
              <Title order={3}>Thread Created</Title>
              <Text>201</Text>
            <Paper
              p="xl"
              shadow="xl"
              withBorder
              w={{ base: '90vw', xs: 'auto' }}
            >
              <Title order={3}>Thread Published</Title>
              <Text>177</Text>
            </Paper>
            <Paper
              p="xl"
              shadow="xl"
              withBorder
              w={{ base: '90vw', xs: 'auto' }}
            >
              <Title order={3}>Actions</Title>
              <Button variant="outline">New Post</Button>
            </Paper>
          </Group>
        </Stack>
      )}
    </Container>
    // <Group>
    //   {trips.map((trip) => (
    //     <TripCard trip={trip} key={trip.id} />
    //   ))}
    // </Group>
  );
};

export default RoutePage;
