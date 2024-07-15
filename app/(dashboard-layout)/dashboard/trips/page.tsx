import { TripCard } from '@/components/trip/tripCard';
import { GetAllTripsByUserQuery } from '@/features/trips/get/getAllTripsByUser.query';
import { requiredAuth } from '@/lib/auth/helper';
import type { PageParams } from '@/types/next';
import {
  Container,
  Divider,
  Group,
  Paper,
  Stack,
  Title,
  Text,
  Button,
} from '@mantine/core';
import { LINKS } from '~/src/utils/NavigationLinks';

const RoutePage = async ({}: PageParams) => {
  const user = await requiredAuth();
  const isEmailNotVerified = user.email && !user.emailVerified;

  const trips = await GetAllTripsByUserQuery({ userId: user.id });

  return (
    <Container>
      {isEmailNotVerified && (
        <Stack>
          <Title>Travels</Title>
          <Divider mb="md" />
          <Group>
            {trips.length > 0 && trips.map((trip) => (
              <TripCard trip={trip} key={trip.id} url={LINKS.Dashboard.TripDetails.href}/>
            ))}
          </Group>
        </Stack>
      )}
    </Container>
  );
};

export default RoutePage;
