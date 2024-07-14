import { MapContainer } from '@/components/map/mapContainer';
import { IsTripExistByIdQuery } from '@/features/trips/isTripExistById.query';
import { requiredAuth } from '@/lib/auth/helper';
import type { PageParams } from '@/types/next';
import { LINKS } from '@/utils/NavigationLinks';
import { Group } from '@mantine/core';
import { notFound, redirect } from 'next/navigation';
import { TripDetailList } from './_component/tripDetailList';

type tripParams = PageParams<{ tripId: string }>;

const RoutePage = async ({ params: { tripId } }: tripParams) => {
  await requiredAuth().catch(() => {
    redirect(LINKS.Auth.SignIn.href);
  });
  const isTripExist = await IsTripExistByIdQuery({ tripId });

  if (!isTripExist) return notFound();

  return (
    <Group justify="space-between" align="start">
      <TripDetailList tripId={tripId} />
      <MapContainer />
    </Group>
  );
};

export default RoutePage;
