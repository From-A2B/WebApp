import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EditStepNameQuerySchema = z.object({
  stepId: z.string(),
  name: z.string().min(3),
});

export type EditStepNameQuerySchema = z.infer<typeof EditStepNameQuerySchema>;

export const EditStepNameQuery = async ({
  name,
  stepId,
}: EditStepNameQuerySchema) => {
  return await prisma.step.update({
    where: {
      id: stepId,
    },
    data: {
      name,
    },
  });
};

export type EditStepNameQuery = NonNullable<
  Prisma.PromiseReturnType<typeof EditStepNameQuery>
>;
