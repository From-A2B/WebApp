'use client';

import { adventurer } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';
import { Avatar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { User } from 'next-auth';
import { EditIcon } from '../icons/edit.icon';

type AvatarImageProps = {
  user: User;
  editable?: boolean;
};

const AvatarImage = ({ user, editable }: AvatarImageProps) => {
  const [hovered, { open: openHovered, close: closeHovered }] =
    useDisclosure(true);

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

  if (user.image)
    return (
      <Avatar src={user.image} alt={user.name ?? 'User Avatar'} size={38} />
    );

  let avatar = '';

  if (user.name) avatar = generateAvatar(user.name);

  if (user.email) avatar = generateAvatar(user.email);

  return (
    <>
      {editable && hovered && (
        <EditIcon
          size={50}
          colorize="var(--mantine-color-teal-6)"
          pos="relative"
          left={49}
          className="z-20"
          variant="subtle"
          m={0}
          p={0}
        />
      )}

      <Avatar
        src={avatar}
        radioGroup="xl"
        size={38}
        m={0}
        p={0}
        // onMouseEnter={openHovered}
        // onMouseLeave={closeHovered}
      />
    </>
  );
};

export default AvatarImage;
