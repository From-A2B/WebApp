import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const UpdateTripPictureQuerySchema = z.object({
  tripId: z.string(),
  picture: z.string().url()
});

export type UpdateTripPictureQuerySchema = z.infer<typeof UpdateTripPictureQuerySchema>;

export const UpdateTripPictureQuery = async ({tripId,picture}: UpdateTripPictureQuerySchema) => {
  await prisma.trip.update({
    where: {
     id: tripId
    },
    data: {
      image: picture
    }
 })
};

export type UpdateTripPictureQuery = NonNullable<
  Prisma.PromiseReturnType<typeof UpdateTripPictureQuery>
>;

export type { };
= UpdateTripPictureQuery extends (infer U)[]
  ? U
  : never;
