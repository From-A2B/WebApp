'use client';

import { adventurer } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';
import { useDisclosure } from '@mantine/hooks';
import type { User } from 'next-auth';
import { EditIcon } from '../icons/edit.icon';
import { Avatar, AvatarImage } from '../ui/avatar';

type AvatarIconProps = {
  user: User;
  editable?: boolean;
};

export const AvatarIcon = ({ user, editable }: AvatarIconProps) => {
  const [hovered, { open: openHovered, close: closeHovered }] =
    useDisclosure(false);

  const generateAvatar = (seed: string) => {
    const isFlip = Math.random() > 0.5;
    const avatar = createAvatar(adventurer, {
      randomizeIds: true,
      seed: seed,
      flip: isFlip,
      hairProbability: 95,
      glassesProbability: 30,
      featuresProbability: 20,
      earringsProbability: 70,
    }).toDataUriSync();

    return avatar;
  };

  let avatar: string | null = null;

  if (user.name) avatar = generateAvatar(user.name);

  if (user.email && !avatar) avatar = generateAvatar(user.email);

  return (
    <Avatar onMouseEnter={openHovered} onMouseLeave={closeHovered}>
      <AvatarImage src={user.image ?? avatar!} />
      {editable && hovered && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer transition-opacity duration-200 opacity-100"

          // onClick={onChangeAvatar}
        >
          <EditIcon loop colorize={undefined} />
        </div>
      )}
    </Avatar>
  );
};
