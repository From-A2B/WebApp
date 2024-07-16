'use server';

import { GoogleGeoCoding } from '@/lib/google/googleGeocoding';
import { authAction } from '@/lib/server-actions/safe-actions';
import { GetLocationFromAddressSchema } from '@/types/address/getLocationFromAddress.schema';

export const GetLocationFromAddressAction = authAction(
  GetLocationFromAddressSchema,
  async ({ address }, _) => {
    const locations = await GoogleGeoCoding.GetLocationAsync({ address });
  }
);
