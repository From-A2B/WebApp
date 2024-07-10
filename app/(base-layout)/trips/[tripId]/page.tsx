import type { PageParams } from '@/types/next';
import { notFound } from 'next/navigation';
import { GetOneTripByIdQuery } from '~/src/features/trips/get/getOneTripById.query';

type tripParams = PageParams<{ tripId: string }>;

const RoutePage = async ({ params: { tripId } }: tripParams) => {
  const trip = await GetOneTripByIdQuery({ tripId });
  if (!trip) notFound();

  return <>{trip.name}</>;
};

export default RoutePage;
