'use client';

import { Menu } from '@mantine/core';
import { IconArrowBarToLeft, IconArrowBarToRight } from '@tabler/icons-react';

import { EditDocumentIcon } from '@/components/icons/editDocument.icon';
import { TrashIcon } from '@/components/icons/trash.icon';
import { useStepStore } from '@/utils/store/stepStore';
import { useDisclosure } from '@mantine/hooks';
import type { PropsWithChildren } from 'react';

export type StepMenuProps = PropsWithChildren<{
  stepId: string;
  tripId: string;
}>;

export const StepMenu = ({ children, stepId, tripId }: StepMenuProps) => {
  const AddStepBefore = useStepStore((s) => s.AddStepBefore);
  const AddStepAfter = useStepStore((s) => s.AddStepAfter);

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
        <Menu.Item
          leftSection={<IconArrowBarToRight />}
          onClick={() => AddStepBefore({ stepId, tripId })}
        >
          Add before
        </Menu.Item>
        <Menu.Item
          leftSection={<IconArrowBarToLeft />}
          onClick={() => AddStepAfter({ stepId, tripId })}
        >
          Add after
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
