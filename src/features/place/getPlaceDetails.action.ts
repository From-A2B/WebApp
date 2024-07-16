'use server';

import { GooglePlaces } from '@/lib/google/googlePlaces';
import { authAction } from '@/lib/server-actions/safe-actions';
import { PlaceDetailsSchema } from '@/types/place/placeDetails.schema';

export const GetPlaceDetailsAction = authAction(
  PlaceDetailsSchema,
  async ({ placeId }, _) => {
    const placeDetails = await GooglePlaces.getPlaceDetails({ placeId });

    return placeDetails.data;
  }
);
