import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const GetOneTripByIdQuerySchema = z.object({
  tripId: z.string(),
});

export type GetOneTripByIdQuerySchema = z.infer<
  typeof GetOneTripByIdQuerySchema
>;

export const GetOneTripByIdQuery = async ({
  tripId,
}: GetOneTripByIdQuerySchema) => {
  const trip = await prisma.trip.findFirst({
    where: {
      id: tripId,
    },

    select: {
      id: true,
      name: true,
      startDate: true,
      endDate: true,
      description: true,
      image: true,
      steps: {
        select: {
          id: true,
          order: true,
          name: true,
          startDate: true,
          endDate: true,
          description: true,
          latitude: true,
          longitude: true,
        },
      },
    },
  });

  return trip;
};

export type GetOneTripByIdQuery = NonNullable<
  Prisma.PromiseReturnType<typeof GetOneTripByIdQuery>
>;
