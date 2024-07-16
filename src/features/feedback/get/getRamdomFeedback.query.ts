import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const GetRandomFeedbackQuerySchema = z.object({
  take: z.number().optional().default(50),
});

export type GetRandomFeedbackQuerySchema = z.infer<
  typeof GetRandomFeedbackQuerySchema
>;

export const GetRandomFeedbackQuery = async ({
  take,
}: GetRandomFeedbackQuerySchema) => {
  const feedback = await prisma.feedback.findManyRandom(take, {
    select: {
      id: true,
      userId: true,
      message: true,
      review: true,
      createdAt: true,
      user: {
        select: {
          name: true,
        },
      },
    },
  });

  return feedback;
};

export type GetRandomFeedbackQuery = NonNullable<
  Prisma.PromiseReturnType<typeof GetRandomFeedbackQuery>
>;

export type RandomFeedback = GetRandomFeedbackQuery extends (infer U)[]
  ? U
  : never;
