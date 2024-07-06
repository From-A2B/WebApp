import { z } from 'zod';

export const ContactSupportSchema = z.object({
  name: z.string(),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(10, 'Subject must be at least 10 characters long'),
  message: z.string().min(50, 'Message must be at least 50 characters long'),
});

export type ContactSupportSchema = z.infer<typeof ContactSupportSchema>;
