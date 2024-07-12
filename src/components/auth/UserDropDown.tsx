import { AvatarIcon } from '@/components/profile/avatarIcon';
import { displayName } from '@/utils/format/displayName';
import { LINKS } from '@/utils/NavigationLinks';
import {
  ActionIcon,
  Group,
  Menu,
  MenuDivider,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
  Paper,
  rem,
  Text,
} from '@mantine/core';
import { IconChevronRight, IconShieldLock } from '@tabler/icons-react';
import type { User } from 'next-auth';
import Link from 'next/link';
import LogoutMenuItem from './LogoutMenuItem';

export type UserDropDownVariant = 'outline' | 'minimal';

type UserDropDownProps = {
  user: User;
  variant?: UserDropDownVariant;
};

const UserDropDown = ({ user, variant = 'minimal' }: UserDropDownProps) => {
  return (
    <Group>
      <Menu
        withArrow
        width={300}
        position="bottom-end"
        transitionProps={{ transition: 'pop' }}
        withinPortal
        trigger="click-hover"
      >
        <MenuTarget>
          {variant === 'minimal' ? (
            <ActionIcon variant="transparent" radius="xl" size="xl">
              <AvatarIcon user={user} />
            </ActionIcon>
          ) : (
            <Group
              align="center"
              justify="center"
              style={{ cursor: 'pointer' }}
            >
              <Paper>
                <Group>
                  <ActionIcon variant="transparent" radius="xl" size="xl">
                    <AvatarIcon user={user} />
                  </ActionIcon>
                  <Text>
                    {displayName({ email: user.email!, name: user.name })}
                  </Text>
                </Group>
              </Paper>
            </Group>
          )}
        </MenuTarget>
        <MenuDropdown>
          <MenuItem
            key="UserProfileSection"
            rightSection={
              <IconChevronRight
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            component={Link}
            href={LINKS.Account.MyAccount.href}
          >
            <Group>
              <AvatarIcon user={user} />
              <div>
                <Text fw={500}>{user.name}</Text>
                <Text size="xs" c="dimmed">
                  {user.email}
                </Text>
              </div>
            </Group>
          </MenuItem>

          <MenuDivider />

          <MenuLabel>Application</MenuLabel>
          <MenuItem
            leftSection={
              <IconShieldLock
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            component={Link}
            href={LINKS.Dashboard.Dashboard.href}
          >
            Dashboard
          </MenuItem>

          <MenuLabel>Settings</MenuLabel>
          <LogoutMenuItem />
        </MenuDropdown>
      </Menu>
    </Group>
  );
};

export default UserDropDown;
