import { TransportMode } from '@/types/transportMode.type';
import { z } from 'zod';

export const EditStepTransportModeSchema = z.object({
  stepId: z.string(),
  transportMode: TransportMode,
});

export type EditStepTransportModeSchema = z.infer<
  typeof EditStepTransportModeSchema
>;
