'use server';

import { authAction } from '@/lib/server-actions/safe-actions';
import { EditStepDestinationQuery } from './editStepDestination.query';
import { EditStepDestinationSchema } from './editStepDestination.schema';

export const EditStepDestinationAction = authAction(
  EditStepDestinationSchema,
  async ({ stepId, lat, lng }) => {
    return EditStepDestinationQuery({ stepId, lat, lng });
  }
);
