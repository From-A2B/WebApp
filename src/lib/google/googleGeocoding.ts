import { GetLocationFromAddressSchema } from '@/types/address/getLocationFromAddress.schema';
import { ReverseGeocodeSchema } from '@/types/address/reverseGeocode.schema';
import { Client } from '@googlemaps/google-maps-services-js';
import { env } from '../env/server';

const googleClient = new Client();

export class GoogleGeoCoding {
  public static async GetLocationAsync({
    address,
  }: GetLocationFromAddressSchema) {
    const locations = await googleClient.geocode({
      params: {
        key: env.GOOGLE_MAPS_API_KEY,
        address,
      },
    });

    return locations.data;
  }

  public static async ReverseGeocode({ lat, lng }: ReverseGeocodeSchema) {
    const locations = await googleClient.reverseGeocode({
      params: {
        key: env.GOOGLE_MAPS_API_KEY,
        latlng: {
          lat,
          lng,
        },
      },
    });

    return locations.data;
  }
}
