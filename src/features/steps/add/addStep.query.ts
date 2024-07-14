import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AddStepSchema } from './addStep.schema';

export const AddStepQuerySchema = z.object({
  tripId: z.string(),
  newStep: AddStepSchema,
});

export type AddStepQuerySchema = z.infer<typeof AddStepQuerySchema>;

export const AddStepQuery = async ({
  tripId,
  newStep: { latitude, longitude, name, description, endDate, startDate, rank },
}: AddStepQuerySchema) => {
  const newStep = await prisma.step.create({
    data: {
      tripId,
      rank,
      name,
      startDate,
      endDate,
      description,
      latitude,
      longitude,
    },
  });

  return newStep;
};

export type AddStepQuery = NonNullable<
  Prisma.PromiseReturnType<typeof AddStepQuery>
>;
