'use client';

import type { NavigationLink } from '@/types/NavigationLink.schema';
import { ACCOUNT_LINKS, LINKS } from '@/utils/NavigationLinks';
import { Container, Tabs } from '@mantine/core';
import { usePathname, useRouter } from 'next/navigation';
import type { PropsWithChildren } from 'react';
import { useState } from 'react';

export const AccountNavigation = (props: PropsWithChildren) => {
  const router = useRouter();

  const path = usePathname();

  const [activeTab, setActiveTab] = useState<string | null>(path);

  return (
    <Tabs
      orientation="vertical"
      variant="outline"
      defaultValue="gallery"
      value={activeTab}
      onChange={(value) => {
        setActiveTab(value);
      }}
    >
      <Tabs.List visibleFrom="sm">
        {ACCOUNT_LINKS.map((link: NavigationLink) => {
          return (
            <Tabs.Tab
              key={link.href}
              value={link.href}
              leftSection={link.icon}
              onClick={() => router.push(link.href)}
            >
              {link.label}
            </Tabs.Tab>
          );
        })}
        <Tabs.Tab
          key={LINKS.Legal.Terms.href}
          value={LINKS.Legal.Terms.href}
          leftSection={LINKS.Legal.Terms.icon}
          onClick={() => router.push(LINKS.Legal.Terms.href)}
        >
          {LINKS.Legal.Terms.label}
        </Tabs.Tab>
      </Tabs.List>
      {ACCOUNT_LINKS.map((link: NavigationLink) => {
        return (
          <Tabs.Panel key={`Panel-${link.href}`} value={link.href}>
            <Container>{props.children}</Container>
          </Tabs.Panel>
        );
      })}
    </Tabs>
  );
};
