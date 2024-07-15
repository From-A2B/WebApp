'use client';

import { Player } from '@lordicon/react';
import { useRef } from 'react';

import type { ActionIconProps } from '@mantine/core';
import { ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ICON from '@/assets/system-regular-29-cross.json';

type CrossCircleIconProps = {
  onClick?: () => void;

  isHover?: boolean;
  loop?: boolean;
  size?: number;
  colorize?: string;
  disabled?: boolean;
} & ActionIconProps;
export const CrossCircleIcon = ({
  onClick,
  isHover,
  size = 32,
  loop,
  colorize,
  disabled,
  ...props
}: CrossCircleIconProps) => {
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
      size={size}
      {...props}
    >
      <Player
        ref={playerRef}
        icon={ICON}
        size={size}
        onComplete={handleComplete}
        colorize={
          disabled
            ? 'var(--mantine-color-grey-5)'
            : colorize || 'var(--mantine-color-red-5)'
        }
      />
    </ActionIcon>
  );
};