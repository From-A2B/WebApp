import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EditStepDescQuerySchema = z.object({
  stepId: z.string(),
  description: z.string(),
});

export type EditStepDescQuerySchema = z.infer<typeof EditStepDescQuerySchema>;

export const EditStepDescQuery = async ({
  stepId,
  description,
}: EditStepDescQuerySchema) => {
  return prisma.step.update({
    where: {
      id: stepId,
    },
    data: {
      description,
    },
  });
};

export type EditStepDescQuery = NonNullable<
  Prisma.PromiseReturnType<typeof EditStepDescQuery>
>;
