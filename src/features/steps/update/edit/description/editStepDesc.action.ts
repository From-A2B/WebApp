'use server';

import { authAction } from '@/lib/server-actions/safe-actions';
import { EditStepDescQuery } from './editStepDesc.query';
import { EditStepDescSchema } from './editStepDesc.schema';

export const EditStepDescAction = authAction(
  EditStepDescSchema,
  async ({ stepId, description }, _) => {
    return await EditStepDescQuery({ stepId, description });
  }
);
