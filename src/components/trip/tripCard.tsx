import { Paper, Title, Text, Image, Group } from '@mantine/core';
import {IconCalendarEvent} from '@tabler/icons-react';
import type { Trip } from '@prisma/client';

export type TripCardProps = {
  trip: Trip;
  url: string;
};

export const TripCard = ({
  trip: { description, endDate, id, image, name, startDate, userId },
  url
}: TripCardProps) => {
  return (
    <a href={window.location.pathname + url}>
      <Paper withBorder p="xl">
        <Title>{name}</Title>
        <Text>{description}</Text>
        <Group align='middle' mt={5}>
          <IconCalendarEvent />
          <Text>{startDate.toDateString()}</Text>
        </Group>
        {image && <Image src={image} alt={name} />}
      </Paper>
    </a>
  );
};
