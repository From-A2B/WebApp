import { AutocompletePlacesSchema } from '@/types/place/autocompletePlaces.schema';
import { PlaceDetailsSchema } from '@/types/place/placeDetails.schema';
import { PlaceTextSearchSchema } from '@/types/place/placeTextSearch.schema';
import { Client } from '@googlemaps/google-maps-services-js';
import { env } from '../env/server';

const googleClient = new Client();

export class GooglePlaces {
  public static async getPlacesAutoComplete({
    query,
  }: AutocompletePlacesSchema) {
    return await googleClient.placeAutocomplete({
      params: {
        key: env.GOOGLE_MAPS_API_KEY,
        input: query,
      },
    });
  }

  public static async getPlaceTextSearch({ query }: PlaceTextSearchSchema) {
    return await googleClient.textSearch({
      params: {
        key: env.GOOGLE_MAPS_API_KEY,
        query,
      },
    });
  }

  public static async getPlaceDetails({ placeId }: PlaceDetailsSchema) {
    return await googleClient.placeDetails({
      params: {
        key: env.GOOGLE_MAPS_API_KEY,
        place_id: placeId,
      },
    });
  }
}
