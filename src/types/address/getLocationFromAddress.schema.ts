import { z } from 'zod';

export const GetLocationFromAddressSchema = z.object({
  address: z.string(),
});

export type GetLocationFromAddressSchema = z.infer<
  typeof GetLocationFromAddressSchema
>;
