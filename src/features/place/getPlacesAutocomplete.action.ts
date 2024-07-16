'use server';

import { GooglePlaces } from '@/lib/google/googlePlaces';
import { authAction } from '@/lib/server-actions/safe-actions';
import { AutocompletePlacesSchema } from '@/types/place/autocompletePlaces.schema';

export const GetPlacesAutocompleteAction = authAction(
  AutocompletePlacesSchema,
  async ({ query }, _) => {
    const placeAutocompleteResponse = await GooglePlaces.getPlacesAutoComplete({
      query,
    });

    return placeAutocompleteResponse.data;
  }
);
