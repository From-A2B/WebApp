'use client';

import { Player } from '@lordicon/react';
import { useRef } from 'react';

import ICON from '@public/assets/system-regular-29-cross.json';

type CrossCircleProps = {
  isHover?: boolean;
  loop?: boolean;
  size?: number;
};
const CrossCircle = ({ isHover, size = 32, loop }: CrossCircleProps) => {
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
    />
  );
};

export default CrossCircle;
