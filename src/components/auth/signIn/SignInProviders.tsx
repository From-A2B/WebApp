/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import {
  Alert,
  Container,
  Divider,
  Skeleton,
  Stack,
  Title,
} from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import { SignInCredentialsFrom } from './signInCredentialsFrom';
import ProviderButton from './ProviderButton';

export const SignInProviders = () => {
  const { data: providers, isPending } = useQuery({
    queryFn: () => fetch(`/api/auth/providers`).then((res) => res.json()),
    queryKey: ['providers'],
  });

  if (isPending) {
    return (
      <Stack px="md">
        <Skeleton height={40} radius="xl" />
        <Skeleton height={40} radius="xl" />
        <Divider label="Or" labelPosition="center" my="lg" />
        <Skeleton height={40} radius="xl" />
      </Stack>
    );
  }

  if (typeof providers !== 'object') {
    return (
      <Alert icon={<IconAlertTriangle />} color="var(--mantine-color-red-6)">
        <Title>
          The provider is not available. It's due to a misconfiguration in the
          auth.ts file
        </Title>
      </Alert>
    );
  }
  return (
    <Container>
      <div className="flex flex-col gap-2">
        {/* ℹ️ Add provider you want to support here */}
        {providers.google ? <ProviderButton providerId="google" /> : null}
      </div>
      <Divider label="Or" labelPosition="center" my="lg" />
      <SignInCredentialsFrom />
    </Container>
  );
};
