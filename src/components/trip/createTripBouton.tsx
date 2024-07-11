'use client';

import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { PlusCircleIcon } from '~/src/components/icons/plusCircle.icon';
import { CreateTripModal } from './createTripModal';

type createTripBoutonProps = {};

export const CreateTripBouton = ({}: createTripBoutonProps) => {
  const [hovered, { open, close }] = useDisclosure(false);

  const [opened, { open: openCreateTripModal, close: closeCreateTripModal }] =
    useDisclosure(false);

  return (
    <>
      <Button
        variant="transparent"
        leftSection={<PlusCircleIcon isHover={hovered} loop />}
        onMouseEnter={open}
        onMouseLeave={close}
        onClick={openCreateTripModal}
      >
        Create my trip
      </Button>
      <CreateTripModal opened={opened} close={closeCreateTripModal} />
    </>
  );
};
