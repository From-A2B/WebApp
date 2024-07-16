import { z } from 'zod';

export const UserDisplayNameSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
});

export type UserDisplayNameSchema = z.infer<typeof UserDisplayNameSchema>;
