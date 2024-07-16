'use server';

import { authAction } from '@/lib/server-actions/safe-actions';
import { EditStepNameQuery } from './editStepName.query';
import { EditStepNameSchema } from './editStepName.schema';

export const EditStepNameAction = authAction(
  EditStepNameSchema,
  async ({ stepId, name }, _) => {
    return EditStepNameQuery({ stepId, name });
  }
);
