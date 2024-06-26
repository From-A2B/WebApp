'use client';

import { Player } from '@lordicon/react';
import { useRef } from 'react';

import ICON from '@public/assets/wired-outline-49-plus-circle.json';

type PlusCircleProps = {
  isHover?: boolean;
  loop?: boolean;
  size?: number;
};
const PlusCircle = ({ isHover, size = 32, loop }: PlusCircleProps) => {
  const playerRef = useRef<Player>(null);

  if (isHover) playerRef.current?.playFromBeginning();
  else playerRef.current?.goToLastFrame();

  const handleComplete = () => {
    if (isHover && loop) playerRef.current?.playFromBeginning();
  };

  return (
    <Player
      ref={playerRef}
      icon={ICON}
      size={size}
      onComplete={handleComplete}
      colorize="var(----mantine-color---mantine-color-red-7)"
    />
  );
};

export default PlusCircle;
