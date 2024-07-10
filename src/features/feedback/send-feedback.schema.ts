import { z } from 'zod';

export const SendFeedbackSchema = z.object({
  email: z.string().min(1).email(),
  review: z.number().min(1),
  message: z.string().min(1),
});

export type SendFeedbackSchemaType = z.infer<typeof SendFeedbackSchema>;
