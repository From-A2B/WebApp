import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const IsTripExistByIdQuerySchema = z.object({
  tripId: z.string(),
});

export type IsTripExistByIdQuerySchema = z.infer<
  typeof IsTripExistByIdQuerySchema
>;

export const IsTripExistByIdQuery = async ({
  tripId,
}: IsTripExistByIdQuerySchema) => {
  const isExist = await prisma.trip.findFirst({
    where: {
      id: tripId,
    },
  });

  return isExist !== null;
};

export type IsTripExistByIdQuery = NonNullable<
  Prisma.PromiseReturnType<typeof IsTripExistByIdQuery>
>;
