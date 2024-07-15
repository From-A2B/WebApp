import { Paper, Title, Text, Image, Group } from '@mantine/core';
import { IconCalendarEvent } from '@tabler/icons-react';
import type { Trip } from '@prisma/client';
import Link from 'next/link';

export type TripCardProps = {
  trip: Trip;
  url: string;
};

export const TripCard = ({
  trip: { description, endDate, id, image, name, startDate, userId },
  url,
}: TripCardProps) => {
  return (
    <Paper component={Link} href={url.replace('{id}', id)} withBorder p="xl">
      <Title style={{ color: 'black' }}>{name}</Title>
      <Text style={{ color: 'black' }}>{description}</Text>
      <Group style={{ color: 'black' }} align="middle" mt={5}>
        <IconCalendarEvent />
        <Text>{startDate.toDateString()}</Text>
      </Group>
      {image && <Image src={image} alt={name} />}
    </Paper>
  );
};
