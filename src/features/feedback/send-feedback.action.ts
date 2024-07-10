'use server';

import { auth } from '@/lib/auth/helper';
import { prisma } from '@/lib/prisma';
import { action } from '@/lib/server-actions/safe-actions';
import { SendFeedbackSchema } from './send-feedback.schema';

export const sendFeedbackAction = action(
  SendFeedbackSchema,
  async (data) => {
    const user = await auth();

    const email = user?.email ?? data.email;

    await prisma.feedback.create({
      data: {
        message: data.message,
        review: Number(data.review) || 0,
        userId: user?.id,
        email,
      },
    });


    return { message: 'Your feedback has been sent.' };
  }
);
