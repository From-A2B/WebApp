import { Paper, Title } from '@mantine/core';
import type { Trip } from '@prisma/client';
import Link from 'next/link';

export type TripCardProps = {
  trip: Trip;
};

export const TripCard = ({
  trip: { description, endDate, id, image, name, startDate, userId },
}: TripCardProps) => {
  return (
    <Paper
      withBorder
      p="xl"
      component={Link}
      href={`http://localhost:3000/trips/${id}`}
    >
      <Title>{name}</Title>
    </Paper>
  );
};
