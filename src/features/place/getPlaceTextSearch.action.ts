'use server';

import { GooglePlaces } from '@/lib/google/googlePlaces';
import { authAction } from '@/lib/server-actions/safe-actions';
import { PlaceTextSearchSchema } from '@/types/place/placeTextSearch.schema';

export const GetPlaceTextSearchAction = authAction(
  PlaceTextSearchSchema,
  async ({ query }, _) => {
    const placeTextSearchResponse = await GooglePlaces.getPlaceTextSearch({
      query,
    });

    return placeTextSearchResponse.data;
  }
);
