import { LINKS } from '@/utils/NavigationLinks';
import {
  createSearchParamsCache,
  parseAsBoolean,
  parseAsString,
} from 'nuqs/server';

export const searchParamsCache = createSearchParamsCache({
  token: parseAsString.withDefault(''),
  success: parseAsBoolean.withDefault(false),
  callbackUrl: parseAsString.withDefault(LINKS.Landing.Landing.href),
});
