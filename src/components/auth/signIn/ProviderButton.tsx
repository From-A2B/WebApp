'use client';

import { GoogleLogoSvg } from '@/components/svg/googleLogo.svg';
import { getServerUrl } from '@/utils/server-url';
import { Button } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';
import { useQueryState } from 'nuqs';

type ProviderButtonProps = {
  providerId: string;
};

const ProviderButton = (props: ProviderButtonProps) => {
  const [callbackUrl] = useQueryState('callbackUrl');
  const oAuthSignInMutation = useMutation({
    mutationFn: () =>
      signIn(props.providerId, {
        callbackUrl: callbackUrl ?? `${getServerUrl()}/`,
      }),
  });

  const colorScheme = useColorScheme();

  return (
    <>
      {props.providerId === 'google' && (
        <Button
          fullWidth
          leftSection={<GoogleLogoSvg size={32} />}
          my="xs"
          onClick={() => oAuthSignInMutation.mutate()}
          variant={colorScheme === 'dark' ? 'outline' : 'white'}
        >
          Sign in with Google
        </Button>
      )}
    </>
  );
};

export default ProviderButton;
