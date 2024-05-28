import { getServerUrl } from '@/utils/server-url';
import { Button } from '@mantine/core';
import { IconBrandGoogle } from '@tabler/icons-react';
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

  return (
    <>
      {props.providerId === 'google' && (
        <Button
          fullWidth
          leftSection={<IconBrandGoogle />}
          my="xs"
          onClick={() => oAuthSignInMutation.mutate()}
        >
          Sign in with Google
        </Button>
      )}
    </>
  );
};

export default ProviderButton;
