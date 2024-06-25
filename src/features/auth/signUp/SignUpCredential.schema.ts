import { z } from 'zod';

export const SignUpCredentialSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .regex(/^[a-zA-Z0-9\-._]+$/, {
        message:
          'The user name must contain only the characters a-z, A-Z, 0-9, -, . et _',
      }),
    email: z.string().email('the email is invalid'),
    password: z
      .string()
      .min(8, 'password must contain at least 8 characters')
      .refine(
        (value: string) => new Set(value).size >= 4,
        'Password must contain at least 4 unique characters'
      )
      .refine(
        (value: string) => /[^0-9a-zA-Z]/.test(value),
        'Password must contain at least one special character'
      )
      .refine(
        (value: string) => /[0-9]/.test(value),
        'Password must contain at least one digit'
      )
      .refine(
        (value: string) => /[A-Z]/.test(value),
        'Password must contain at least one capital letter'
      )
      .refine(
        (value: string) => /[a-z]/.test(value),
        'Password must contain at least one lowercase letter'
      ),

    verifyPassword: z.string(),
  })
  .refine((data) => data.password === data.verifyPassword, {
    message: "Password does't match",
    path: ['verifyPassword'],
  });

export type SignUpCredentialSchemaType = z.infer<typeof SignUpCredentialSchema>;
