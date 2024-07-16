'use client';

import { Skeleton, Text } from '@mantine/core';

export type StepCounterProps = {
  order?: number;
};

export const StepCounter = ({ order }: StepCounterProps) => {
  if (!order) return <Skeleton animate circle height={44} />;

  return (
    <div
      className="bg-[var(--mantine-primary-color-8)] h-10 w-10 rounded-full flex items-center justify-center border-solid border-4
    border-[var(--mantine-color-white)] select-none "
    >
      <Text c="var(--mantine-color-black)" fw={700} className="">
        {order}
      </Text>
    </div>
  );
};
