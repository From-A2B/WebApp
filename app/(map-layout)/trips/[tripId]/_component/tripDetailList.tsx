'use client';

import { GetOneTripByIdAction } from '@/features/trips/get/getOneTripById.action';
import { tripKeysFactory } from '@/features/trips/tripKeys.factory';
import useNotify from '@/hook/useNotify';
import { cn } from '@/lib/utils';
import {
  Alert,
  Center,
  ScrollArea,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import { StepListSortable } from './stepListSortable';

export type TripDetailListProps = {
  tripId: string;
  className?: string;
};

export const TripDetailList = ({ tripId, className }: TripDetailListProps) => {
  const { ErrorNotify } = useNotify();

  const {
    data: trip,
    isPending: isFetchingTrip,
    error,
  } = useQuery({
    queryKey: tripKeysFactory.byId(tripId),
    queryFn: async () => {
      const { data: trip, serverError } = await GetOneTripByIdAction({
        tripId,
      });
      if (serverError || !trip) ErrorNotify({ message: serverError });

      return trip;
    },
  });

  if (isFetchingTrip)
    return (
      <Center className={cn(className)}>
        <Stack gap="xl">
          <Center>
            <Skeleton height={32} width="20vw" animate />
          </Center>
          <ScrollArea h="80vh">
            <Stack gap="sm">
              {Array.from({ length: 20 }).map((_, index) => (
                <Skeleton key={index} height={40} width={512} />
              ))}
            </Stack>
          </ScrollArea>
        </Stack>
      </Center>
    );

  if (error || !trip)
    return (
      <Alert
        title="Error when fetching trip"
        color="var(--mantine-color-red-5)"
        variant="outline"
        icon={<IconAlertCircle />}
        //TODO: Change this icon with LordIcon
      >
        <Text>
          Unfortunately it is impossible to retrieve the details of this trip.
        </Text>
        <Text>Please try again later</Text>
      </Alert>
    );

  return (
    <Stack flex={1}>
      <Center>
        <Title ta="center">{trip.name}</Title>
      </Center>
      <StepListSortable tripId={tripId} />
    </Stack>
  );
};
