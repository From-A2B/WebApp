import { z } from 'zod';
import { TransportMode } from './transportMode.type';

export const TransportModeSchema = z.object({
  name: TransportMode,
  icon: z.custom<React.JSX.Element>(),
});

export type TransportModeSchema = z.infer<typeof TransportModeSchema>;

export const TransportModesSchema = z.array(TransportModeSchema);
export type TransportModesSchema = z.infer<typeof TransportModesSchema>;
