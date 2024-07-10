import { prisma } from '@/lib/prisma';
import { z } from 'zod';

export const DeleteTripByIdQuerySchema = z.object({
  tripId: z.string(),
  userId: z.string(),
});

export type DeleteTripByIdQuerySchema = z.infer<
  typeof DeleteTripByIdQuerySchema
>;

export const DeleteTripByIdQuery = async ({
  tripId,
  userId,
}: DeleteTripByIdQuerySchema) => {
  await prisma.trip.delete({
    where: {
      id: tripId,
      userId,
    },
  });
};
