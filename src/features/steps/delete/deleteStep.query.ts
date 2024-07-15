import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const DeleteStepQuerySchema = z.object({
  stepId: z.string(),
});

export type DeleteStepQuerySchema = z.infer<typeof DeleteStepQuerySchema>;

export const DeleteStepQuery = async ({ stepId }: DeleteStepQuerySchema) => {
  return await prisma.step.delete({
    where: {
      id: stepId,
    },
  });
};

export type DeleteStepQuery = NonNullable<
  Prisma.PromiseReturnType<typeof DeleteStepQuery>
>;
