import { GetPlaceTextSearchAction } from '@/features/place/getPlaceTextSearch.action';
import { GetPlacesAutocompleteAction } from '@/features/place/getPlacesAutocomplete.action';
import useNotify from '@/hook/useNotify';
import {
  PlaceAutocompleteResult,
  PlaceData,
} from '@googlemaps/google-maps-services-js';
import { Autocomplete } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { IconCircleCheck } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { SearchIcon } from '../icons/search.icon';

export type DestinationInputProps = {
  onChange: (place: Partial<PlaceData>) => void;
};

export const DestinationInput = ({ onChange }: DestinationInputProps) => {
  const { ErrorNotify } = useNotify();

  const [addressValue, setAddressValue] = useDebouncedState('', 500);

  const [places, setPlaces] = useState<PlaceAutocompleteResult[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<Partial<PlaceData> | null>(
    null
  );
  useEffect(() => {
    if (!addressValue.length) setPlaces([]);
    if (!addressValue || addressValue === '') return;
    (async () => {
      const { data: predictionResponse, serverError } =
        await GetPlacesAutocompleteAction({ query: addressValue });

      if (!predictionResponse || serverError) return ErrorNotify({});

      const { predictions: placesPrediction } = predictionResponse;
      console.debug('🚀 ~ placesPrediction:', placesPrediction);

      if (placesPrediction.length === 0) return;
      console.debug(
        '🚀 ~ placesPrediction.length === 0:',
        placesPrediction.length === 0
      );
      setPlaces(placesPrediction);

      const currentPlace: PlaceAutocompleteResult | undefined =
        placesPrediction.find(
          (place: PlaceAutocompleteResult) => place.description === addressValue
        );

      if (currentPlace) {
        const { data: placeResponse, serverError } =
          await GetPlaceTextSearchAction({
            query: currentPlace.description,
          });

        if (!placeResponse || serverError) return ErrorNotify({});
        console.debug('🚀🚀🚀🚀 ~ placeResponse:', placeResponse);

        const { results: places } = placeResponse;
        setSelectedPlace(places[0]);
        onChange(places[0]);
      }
    })();
  }, [addressValue]);

  //! BUG
  // TODO: Pourquoi l'auto complete souvent n'affiche aucune valeur ou une seuls alors que plusieurs lui sont donner Exemple : 'Lyon Saint Ex' -> N'affiche que une seule valeur alors que 5 ont été trouvé

  const handleChange = (value: string) => {
    setAddressValue(value);
    if (selectedPlace) setSelectedPlace(null);
  };
  return (
    <Autocomplete
      withAsterisk
      leftSection={
        !addressValue.length ? null : !selectedPlace ? (
          <SearchIcon
            size={24}
            colorize="var(--mantine-color-orange-6)"
            loop
            forceLoopStart
          />
        ) : (
          <IconCircleCheck color="var(--mantine-primary-color-7)" />
        )
      }
      label="Destination"
      data={places.map((place) => place.description)}
      onChange={(value) => handleChange(value)}
    />
  );
};
