'use server';

import { authAction } from '@/lib/server-actions/safe-actions';
import { EditStepTransportModeQuery } from './editStepTransportMode.query';
import { EditStepTransportModeSchema } from './editStepTransportMode.schema';

export const EditStepTransportModeAction = authAction(
  EditStepTransportModeSchema,
  async ({ stepId, transportMode }, _) => {
    return await EditStepTransportModeQuery({ stepId, transportMode });
  }
);
