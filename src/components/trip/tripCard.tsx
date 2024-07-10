import { Paper, Title } from '@mantine/core';
import type { Trip } from '@prisma/client';

export type TripCardProps = {
  trip: Trip;
};

export const TripCard = ({
  trip: { description, endDate, id, image, name, startDate, userId },
}: TripCardProps) => {
  return (
    <Paper withBorder p="xl">
      <Title>{name}</Title>
    </Paper>
  );
};
