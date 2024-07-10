'use client';

import type { GetOneTripByIdQuery } from '~/src/features/trips/get/getOneTripById.query';

export type TripDetailListProps = {
  trip: GetOneTripByIdQuery;
};

export const TripDetailList = ({ trip: { name } }: TripDetailListProps) => {
  return <>{name}</>;
};
