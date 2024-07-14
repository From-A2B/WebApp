'use client';

import { Player } from '@lordicon/react';
import { useRef } from 'react';

import ICON from '@/assets/system-regular-31-check.json';
import { ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

type CheckIconProps = {
  onClick?: () => void;

  isHover?: boolean;
  loop?: boolean;
  size?: number;
  colorize?: string;
  disabled?: boolean;
};
export const CheckIcon = ({
  onClick,
  isHover,
  size = 32,
  loop,
  colorize,
  disabled,
}: CheckIconProps) => {
  const [hovered, { open: openHover, close: closeHover }] =
    useDisclosure(false);

  const playerRef = useRef<Player>(null);

  if ((isHover || hovered) && !playerRef.current?.isPlaying)
    playerRef.current?.playFromBeginning();

  const handleComplete = () => {
    if ((isHover || hovered) && loop) playerRef.current?.playFromBeginning();
  };

  return (
    <ActionIcon
      variant="transparent"
      onMouseEnter={!isHover ? openHover : () => {}}
      onMouseLeave={closeHover}
      onClick={onClick}
      disabled={disabled}
    >
      <Player
        ref={playerRef}
        icon={ICON}
        size={size}
        onComplete={handleComplete}
        colorize={
          disabled
            ? 'var(--mantine-color-grey-5)'
            : colorize || 'var(--mantine-color-teal-6)'
        }
      />
    </ActionIcon>
  );
};
