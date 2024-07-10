'use server';

import { ActionError, authAction } from '@/lib/server-actions/safe-actions';
import { z } from 'zod';
import { IsTripExistByNameQuery } from '../isTripExistByName.query';
import { CreateTripQuery } from './createTrip.query';
import { CreateTripSchema } from './createTrip.schema';

const CreateTripActionSchema = z.object({
  tripDto: CreateTripSchema,
});

export const CreateTripAction = authAction(
  CreateTripActionSchema,
  async ({ tripDto }, ctx) => {
    let trip = await IsTripExistByNameQuery({ tripName: tripDto.title });

    if (trip) return new ActionError(`The trip: '${trip.name}' already exists`);

    trip = await CreateTripQuery({
      tripDto,
      userId: ctx.user.id,
    });

    return trip;
  }
);
