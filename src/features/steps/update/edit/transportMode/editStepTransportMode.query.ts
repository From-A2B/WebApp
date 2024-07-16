import { prisma } from '@/lib/prisma';
import { TransportMode } from '@/types/transportMode.type';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EditStepTransportModeQuerySchema = z.object({
  stepId: z.string(),
  transportMode: TransportMode,
});

export type EditStepTransportModeQuerySchema = z.infer<
  typeof EditStepTransportModeQuerySchema
>;

export const EditStepTransportModeQuery = async ({
  stepId,
  transportMode,
}: EditStepTransportModeQuerySchema) => {
  return await prisma.step.update({
    where: { id: stepId },
    data: {
      transportMode,
    },
  });
};

export type EditStepTransportModeQuery = NonNullable<
  Prisma.PromiseReturnType<typeof EditStepTransportModeQuery>
>;
