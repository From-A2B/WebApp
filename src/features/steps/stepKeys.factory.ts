export const stepKeysFactory = {
  all: ['Steps'],

  byTripId: (tripId: string) => [...stepKeysFactory.all, { tripId }],
  byId: (stepId: string) => [...stepKeysFactory.all, { stepId }],

  stepBefore: (stepId: string) => [...stepKeysFactory.byId(stepId), 'Before'],
  stepAfter: (stepId: string) => [...stepKeysFactory.byId(stepId), 'After'],

  stepOrder: (stepId: string) => [...stepKeysFactory.byId(stepId), 'Order'],
  stepBeforeOrder: (stepId: string) => [
    ...stepKeysFactory.stepBefore(stepId),
    'Order',
  ],
  stepAfterOrder: (stepId: string) => [
    ...stepKeysFactory.stepAfter(stepId),
    'Order',
  ],
};
