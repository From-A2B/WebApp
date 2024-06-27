import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { CreateTripSchema } from './createTrip.schema';

import { z } from 'zod';

export const CreateTripQuerySchema = z.object({
  tripDto: CreateTripSchema,
  userId: z.string(),
});

export type CreateTripQuerySchema = z.infer<typeof CreateTripQuerySchema>;

export const CreateTripQuery = async ({
  tripDto,
  userId,
}: CreateTripQuerySchema) => {
  const trip = await prisma.trip.create({
    data: {
      name: tripDto.title,
      description: tripDto.description,
      startDate: tripDto.startDate,
      endDate: tripDto.startDate,

      userId: userId,
    },
  });

  return trip;
};

export type CreateTripQuery = NonNullable<
  Prisma.PromiseReturnType<typeof CreateTripQuery>
>;
