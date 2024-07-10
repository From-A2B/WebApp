import { prisma } from '@/lib/prisma';
import { z } from 'zod';

export const UpdateTripDescriptionQuerySchema = z.object({
  tripId: z.string(),
  description: z.string().max(500),
});

export type UpdateTripDescriptionQuerySchema = z.infer<
  typeof UpdateTripDescriptionQuerySchema
>;

export const UpdateTripDescriptionQuery = async ({
  description,
  tripId,
}: UpdateTripDescriptionQuerySchema) => {
  await prisma.trip.update({
    where: {
      id: tripId,
    },
    data: {
      description,
    },
  });
};
