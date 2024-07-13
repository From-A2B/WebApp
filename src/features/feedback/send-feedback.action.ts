'use server';

import { prisma } from '@/lib/prisma';
import { authAction } from '@/lib/server-actions/safe-actions';
import { SendFeedbackSchema } from './send-feedback.schema';

export const sendFeedbackAction = authAction(
  SendFeedbackSchema,
  async (data, { user }) => {
    await prisma.feedback.create({
      data: {
        message: data.message,
        review: Number(data.review) || 0,
        userId: user.id,
        email: data.email,
      },
    });

    return { message: 'Your feedback has been sent.' };
  }
);
