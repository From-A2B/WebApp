import { TripCard } from '@/components/trip/tripCard';
import { GetAllTripsByUserQuery } from '@/features/trips/get/getAllTripsByUser.query';
import { requiredAuth } from '@/lib/auth/helper';
import type { PageParams } from '@/types/next';
import { Group } from '@mantine/core';

const RoutePage = async ({}: PageParams) => {
  const user = await requiredAuth();

  const trips = await GetAllTripsByUserQuery({ userId: user.id });

  return (
    <Group>
      {trips.map((trip) => (
        <TripCard trip={trip} key={trip.id} />
      ))}
    </Group>
  );
};

export default RoutePage;
