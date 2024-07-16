import { GetPlaceTextSearchAction } from '@/features/place/getPlaceTextSearch.action';
import { GetPlacesAutocompleteAction } from '@/features/place/getPlacesAutocomplete.action';
import useNotify from '@/hook/useNotify';
import {
  PlaceAutocompleteResult,
  PlaceData,
} from '@googlemaps/google-maps-services-js';
import { Autocomplete, AutocompleteProps } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconCircleCheck } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { SearchIcon } from '../icons/search.icon';
import { TrashIcon } from '../icons/trash.icon';

export type DestinationInputProps = {
  value?: string;
  onChangeDestination: (place: Partial<PlaceData> | null) => void;
} & AutocompleteProps;

export const DestinationInput = ({
  value,
  onChangeDestination,

  ...props
}: DestinationInputProps) => {
  const { ErrorNotify } = useNotify();

  const [addressValue, setAddressValue] = useState(value || '');
  const [addressValueDebounced] = useDebouncedValue(addressValue, 500);

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

      if (placesPrediction.length === 0) return;
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

        const { results: places } = placeResponse;
        setSelectedPlace(places[0]);
        onChangeDestination(places[0]);
      }
    })();
  }, [addressValueDebounced]);

  //! BUG
  // TODO: Pourquoi l'auto complete souvent n'affiche aucune valeur ou une seuls alors que plusieurs lui sont donner Exemple : 'Lyon Saint Ex' -> N'affiche que une seule valeur alors que 5 ont été trouvé

  const handleClearAddressValue = () => {
    setAddressValue('');
    setSelectedPlace(null);
    onChangeDestination(null);
  };

  const handleChange = (value: string) => {
    setAddressValue(value);
    if (selectedPlace) setSelectedPlace(null);
  };
  return (
    <Autocomplete
      withAsterisk
      value={addressValue}
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
      rightSection={
        !!addressValue.length && <TrashIcon onClick={handleClearAddressValue} />
      }
      label="Destination"
      data={places.map((place) => place.description)}
      onChange={(value) => handleChange(value)}
      {...props}
    />
  );
};
