export const PlaceKeysFactory = {
  all: ['Places'],

  byId: (placeId: string) => [...PlaceKeysFactory.all, { placeId }],
};
