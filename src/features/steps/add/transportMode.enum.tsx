import { TransportModesSchema } from '@/types/transportMode.schema';
import {
  IconBike,
  IconCar,
  IconPlane,
  IconSpeedboat,
  IconWalk,
} from '@tabler/icons-react';

export const transportModeList: TransportModesSchema = [
  {
    name: 'Walk',
    icon: <IconWalk color="var(--mantine-primary-color-7)" />,
  },
  {
    name: 'Bike',
    icon: <IconBike color="var(--mantine-primary-color-7)" />,
  },
  {
    name: 'Car',
    icon: <IconCar color="var(--mantine-primary-color-7)" />,
  },
  {
    name: 'Boat',
    icon: <IconSpeedboat color="var(--mantine-primary-color-7)" />,
  },
  {
    name: 'Plane',
    icon: <IconPlane color="var(--mantine-primary-color-7)" />,
  },
];
