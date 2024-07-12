'use server';

import { prisma } from '@/lib/prisma';
import { ActionError, authAction } from '@/lib/server-actions/safe-actions';
import moment from 'moment';
import { nanoid } from 'nanoid';
import { z } from 'zod';

export const createVerifyEmailAction = authAction(
  z.string(),
  async (_, { user }) => {
    if (user.emailVerified) {
      throw new ActionError('Email is already verified');
    }

    const verificationToken = await prisma.verificationToken.create({
      data: {
        identifier: user.email,
        expires: moment().add(1, 'day').toDate(),
        token: nanoid(32),
      },
    });
  }
);
