export const stepKeysFactory = {
  all: ['Steps'],

  byTripId: (tripId: string) => [...stepKeysFactory.all, { tripId }],

  stepBefore: (stepId: string) => [
    ...stepKeysFactory.all,
    'Before',
    { stepId },
  ],
  stepAfter: (stepId: string) => [...stepKeysFactory.all, 'After', { stepId }],

  stepBeforeOrder: (stepId: string) => [
    ...stepKeysFactory.stepBefore(stepId),
    'Order',
  ],
  stepAfterOrder: (stepId: string) => [
    ...stepKeysFactory.stepAfter(stepId),
    'Order',
  ],
};
