import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const DeleteTripByIdQuerySchema = z.object({
  tripId: z.string(),
});

export type DeleteTripByIdQuerySchema = z.infer<
  typeof DeleteTripByIdQuerySchema
>;

export const DeleteTripByIdQuery = async ({
  tripId,
}: DeleteTripByIdQuerySchema) => {
  await prisma.trip.delete({
    where: {
      id: tripId,
    },
  });
};

export type DeleteTripByIdQuery = NonNullable<
  Prisma.PromiseReturnType<typeof DeleteTripByIdQuery>
>;
