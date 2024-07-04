'use client';

import type { CredentialSchemaType } from '@/features/auth/signIn/Credentials.schema';
import { CredentialSchema } from '@/features/auth/signIn/Credentials.schema';
import { Button, PasswordInput, Stack, Text, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useQueryState } from 'nuqs';

export const SignInCredentialsFrom = () => {
  const loginFrom = useForm<CredentialSchemaType>({
    validateInputOnChange: true,
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(CredentialSchema),
  });

  const [callbackUrl] = useQueryState('callbackUrl');

  const handleSubmitForm = async () => {
    await signIn('credentials', {
      email: loginFrom.values.email,
      password: loginFrom.values.password,
      callbackUrl: callbackUrl ?? undefined,
    });
  };

  return (
    <Stack>
      <TextInput
        label="Email"
        withAsterisk={true}
        placeholder="Email"
        {...loginFrom.getInputProps('email')}
      />
      <PasswordInput
        label="Password"
        withAsterisk
        placeholder="Password"
        {...loginFrom.getInputProps('password')}
      />
      <Stack align="center">
        <Button onClick={handleSubmitForm}>Login</Button>
        <Text>
          {"You don't have an account ?"}
          <Text
            component={Link}
            href="/auth/signup"
            fs="italic"
            td="underline"
            c="blue"
            style={{ cursor: 'pointer' }}
          >
            Sign up
          </Text>
        </Text>
      </Stack>
    </Stack>
  );
};
