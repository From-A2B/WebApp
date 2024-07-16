'use client';

import { Player } from '@lordicon/react';
import { useEffect, useRef } from 'react';

import ICON from '@/assets/system-regular-716-spinner-three-dots.json';
import { ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

type LoaderDotsIconProps = {
  onClick?: () => void;

  isHover?: boolean;
  loop?: boolean;
  forceLoopStart?: boolean;
  size?: number;
  colorize?: string;
  disabled?: boolean;
};
export const LoaderDotsIcon = ({
  onClick,
  isHover,
  size = 32,
  loop,
  colorize,
  disabled,
  forceLoopStart,
}: LoaderDotsIconProps) => {
  const [hovered, { open: openHover, close: closeHover }] =
    useDisclosure(false);

  const playerRef = useRef<Player>(null);

  if ((isHover || hovered) && !playerRef.current?.isPlaying)
    playerRef.current?.playFromBeginning();

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  const handleComplete = () => {
    if (((isHover || hovered) && loop) || (loop && forceLoopStart))
      playerRef.current?.playFromBeginning();
  };

  return (
    <ActionIcon
      variant="transparent"
      onMouseEnter={!isHover ? openHover : () => {}}
      onMouseLeave={closeHover}
      onClick={onClick}
      disabled={disabled}
      size={size}
    >
      <Player
        ref={playerRef}
        icon={ICON}
        size={size}
        onComplete={handleComplete}
        colorize={
          disabled
            ? 'var(--mantine-color-grey-5)'
            : colorize || 'var(--mantine-primary-color-3)'
        }
      />
    </ActionIcon>
  );
};
