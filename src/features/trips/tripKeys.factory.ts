export const tripKeysFactory = {
  all: ['Trips'],
  byId: (tripId: string) => [...tripKeysFactory.all, { tripId }],
};
