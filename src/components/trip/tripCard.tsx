import { Paper, Title } from '@mantine/core';
import Link from 'next/link';

export type TripCardProps = {
  id: string;
  name: string;
};

export const TripCard = ({ id, name }: TripCardProps) => {
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
