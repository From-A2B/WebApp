import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const IsTripExistByNameQuerySchema = z.object({
  tripName: z.string(),
});

export type IsTripExistByNameQuerySchema = z.infer<
  typeof IsTripExistByNameQuerySchema
>;

export const IsTripExistByNameQuery = async ({
  tripName,
}: IsTripExistByNameQuerySchema) => {
  const isExist = await prisma.trip.findFirst({
    where: {
      name: tripName,
    },
    select: {
      id: true,
      name: true,
    },
  });

  return isExist;
};

export type IsTripExistByNameQuery = Prisma.PromiseReturnType<
  typeof IsTripExistByNameQuery
>;
