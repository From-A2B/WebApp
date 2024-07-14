import { z } from 'zod';

export const TransportMode = z.enum(['Walk', 'Bike', 'Car', 'Boat', 'Plane']);

export type TransportMode = z.infer<typeof TransportMode>;
