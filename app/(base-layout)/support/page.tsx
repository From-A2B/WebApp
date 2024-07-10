import { auth } from '@/lib/auth/helper';
import type { PageParams } from '@/types/next';
import { Group, Paper, Stack, Title } from '@mantine/core';
import { ContactForm } from './_component.tsx/contact.form';
import { ContactInformation } from './_component.tsx/contactInformation';

const RoutePage = async ({}: PageParams) => {
  const user = await auth();

  return (
    <Stack justify="center" align="center">
      <Title>Contact us</Title>
      <Paper withBorder p="xl">
        <Group align="start">
          <ContactInformation />
          <Stack>
            <Title order={3}>Send us a message</Title>
            <ContactForm name={user?.name} email={user?.email} />
          </Stack>
        </Group>
      </Paper>
    </Stack>
  );
};

export default RoutePage;
