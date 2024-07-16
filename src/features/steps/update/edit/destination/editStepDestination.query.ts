import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EditStepDestinationQuerySchema = z.object({
  stepId: z.string(),
  lat: z.number(),
  lng: z.number(),
});

export type EditStepDestinationQuerySchema = z.infer<
  typeof EditStepDestinationQuerySchema
>;

export const EditStepDestinationQuery = async ({
  stepId,
  lat,
  lng,
}: EditStepDestinationQuerySchema) => {
  return await prisma.step.update({
    where: {
      id: stepId,
    },
    data: {
      latitude: lat,
      longitude: lng,
    },
  });
};

export type EditStepDestinationQuery = NonNullable<
  Prisma.PromiseReturnType<typeof EditStepDestinationQuery>
>;
