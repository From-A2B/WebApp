import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const GetAllTripsByUserQuerySchema = z.object({
  userId: z.string(),
});

export type GetAllTripsByUserQuerySchema = z.infer<
  typeof GetAllTripsByUserQuerySchema
>;

export const GetAllTripsByUserQuery = async ({
  userId,
}: GetAllTripsByUserQuerySchema) => {
  const trips = await prisma.trip.findMany({
    where: {
      userId,
    },
  });

  return trips;
};

export type GetAllTripsByUserQuery = NonNullable<
  Prisma.PromiseReturnType<typeof GetAllTripsByUserQuery>
>;
