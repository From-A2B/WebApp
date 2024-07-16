import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const updateTripDateQuerySchema = z.object({
  tripId: z.string(),
  startDate: z.date(),
  endDate: z.date(),
});

export type updateTripDateQuerySchema = z.infer<
  typeof updateTripDateQuerySchema
>;

export const updateTripDateQuery = async ({
  endDate,
  startDate,
  tripId,
}: updateTripDateQuerySchema) => {
  await prisma.trip.update({
    where: {
      id: tripId,
    },
    data: {
      startDate,
      endDate,
    },
  });
};

export type updateTripDateQuery = NonNullable<
  Prisma.PromiseReturnType<typeof updateTripDateQuery>
>;
