import type { PageParams } from '@/types/next';
import { Group } from '@mantine/core';
import { notFound, redirect } from 'next/navigation';
import { MapContainer } from '~/src/components/map/mapContainer';
import { IsTripExistByIdQuery } from '~/src/features/trips/isTripExistById.query';
import { requiredAuth } from '~/src/lib/auth/helper';
import { LINKS } from '~/src/utils/NavigationLinks';
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
