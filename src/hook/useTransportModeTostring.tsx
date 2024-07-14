import { TransportModeSchema } from '@/types/transportMode.schema';

export const useTransportModeToString = (
  transportMode: TransportModeSchema
) => {
  return (
    <span>
      {transportMode.icon} {transportMode.name}
    </span>
  );
};
