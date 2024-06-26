'use client';

import CrossCircle from '@/components/Icons/crossCircle';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export type CreateTripModalProps = {
  opened: boolean;
  close: () => void;
};

export const CreateTripModal = ({ opened, close }: CreateTripModalProps) => {
  const [
    hovered,
    { open: openHoverCloseButton, close: closeHoverCloseButton },
  ] = useDisclosure(false);

  return (
    <Modal.Root opened={opened} onClose={close} centered>
      <Modal.Overlay backgroundOpacity={0.55} blur={3} />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
          <Modal.CloseButton
            icon={<CrossCircle isHover={hovered} />}
            onMouseEnter={openHoverCloseButton}
            onMouseLeave={closeHoverCloseButton}
          />
        </Modal.Header>
        <Modal.Body>Modal content</Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
