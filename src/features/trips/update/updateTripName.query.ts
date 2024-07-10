import { prisma } from '@/lib/prisma';
import { z } from 'zod';

export const UpdateTripNameQuerySchema = z.object({
  tripId: z.string(),
  tripName: z.string(),
});

export type UpdateTripNameQuerySchema = z.infer<
  typeof UpdateTripNameQuerySchema
>;

export const UpdateTripNameQuery = async ({
  tripId,
  tripName,
}: UpdateTripNameQuerySchema) => {
  await prisma.trip.update({
    where: {
      id: tripId,
    },
    data: {
      name: tripName,
    },
  });
};
