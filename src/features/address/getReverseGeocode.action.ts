'use server';

import { GoogleGeoCoding } from '@/lib/google/googleGeocoding';
import { authAction } from '@/lib/server-actions/safe-actions';
import { ReverseGeocodeSchema } from '@/types/address/reverseGeocode.schema';

export const GetReverseGeocodeAction = authAction(
  ReverseGeocodeSchema,
  async ({ lat, lng }, _) => {
    const locations = await GoogleGeoCoding.ReverseGeocode({ lat, lng });
    return locations;
  }
);
