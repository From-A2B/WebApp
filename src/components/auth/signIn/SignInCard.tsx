import type { PaperProps } from '@mantine/core';
import { Paper, Space, Stack, Text } from '@mantine/core';
import { SignInProviders } from './signInProviders';

type SignInCardProps = {} & PaperProps;

export const SignInCard = ({ ...props }: SignInCardProps) => {
  return (
    <>
      <Paper {...props} radius="lg">
        <Stack align="center">
          <Text fw="700" size="2em" ta="center">
            Sign In
          </Text>
        </Stack>
        <Space h="xl" />
        <SignInProviders />
      </Paper>
    </>
  );
};
