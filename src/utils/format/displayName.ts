import type { UserDisplayNameSchema } from '@/types/userDisplayName.schema';

export type User = {
  email: string;
  name?: string | null;
};

export const displayName = ({ email, name }: UserDisplayNameSchema): string => {
  return name
    ? name
    : email
        .split('@')[0]
        .replaceAll('.', ' ')
        .replace(/^\w/, (c) => c.toUpperCase());
};
