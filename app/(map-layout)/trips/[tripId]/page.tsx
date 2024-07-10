'use client';

import type { PageParams } from '@/types/next';
import { Group } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { MapContainer } from '~/src/components/map/mapContainer';
import { GetOneTripByIdAction } from '~/src/features/trips/get/getOneTripById.action';
import { TripDetailList } from './_component/tripDetailList';

type tripParams = PageParams<{ tripId: string }>;

const RoutePage = ({ params: { tripId } }: tripParams) => {
  const router = useRouter();

  const { data: trip } = useQuery({
    queryKey: ['trip'],
    queryFn: async () => {
      const { data: trip, serverError } = await GetOneTripByIdAction({
        tripId,
      });
      if (!trip) router.back();

      return trip;
    },
  });

  return (
    <Group justify="space-between" align="start">
      <TripDetailList trip={trip!} />
      <MapContainer />
    </Group>
  );
};

export default RoutePage;
