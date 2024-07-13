'use client';

import { Menu } from '@mantine/core';
import { IconArrowBarToLeft, IconArrowBarToRight } from '@tabler/icons-react';

import { useDisclosure } from '@mantine/hooks';
import type { PropsWithChildren } from 'react';
import { EditDocumentIcon } from '../icons/editDocument.icon';
import { TrashIcon } from '../icons/trash.icon';

export type StepMenuProps = PropsWithChildren<{}>;

export const StepMenu = ({ children }: StepMenuProps) => {
  const [deleteHovered, { open: openDeleteHover, close: closeDeleteHover }] =
    useDisclosure(false);
  const [editHovered, { open: openDeleteEdit, close: closeDeleteEdit }] =
    useDisclosure(false);

  return (
    <Menu trigger="click-hover" position="bottom" withArrow>
      <Menu.Target>{children}</Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={<EditDocumentIcon isHover={editHovered} loop />}
          onMouseEnter={openDeleteEdit}
          onMouseLeave={closeDeleteEdit}
          disabled
        >
          Edit
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<TrashIcon isHover={deleteHovered} loop />}
          onMouseEnter={openDeleteHover}
          onMouseLeave={closeDeleteHover}
          disabled
        >
          Delete
        </Menu.Item>

        <Menu.Divider />
        <Menu.Label>New step</Menu.Label>
        <Menu.Item leftSection={<IconArrowBarToRight />} disabled>
          Add before
        </Menu.Item>
        <Menu.Item leftSection={<IconArrowBarToLeft />} disabled>
          Add after
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
