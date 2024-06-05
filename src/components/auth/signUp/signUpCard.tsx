import { SiteName } from '@/components/layout/SiteName';
import type { PaperProps } from '@mantine/core';
import { Paper, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import { SignUpCredentialsForm } from './signUpCredentialsForm';

type SignUpCardProps = {} & PaperProps;

export const SignUpCard = ({ ...props }: SignUpCardProps) => {
  return (
    <>
      <Paper {...props} radius="lg">
        <Stack align="center">
          <SiteName logoSize={38} />
          <Text fw="700" size="2em">
            Create your account
          </Text>

          <SignUpCredentialsForm />

          <Text>
            You already have an account ?{' '}
            <Text
              component={Link}
              href="/auth/signin"
              fs="italic"
              td="underline"
              c="blue"
              style={{ cursor: 'pointer' }}
            >
              Sign in
            </Text>
          </Text>
        </Stack>
      </Paper>
    </>
  );
};
