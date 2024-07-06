import { auth } from '@/lib/auth/helper';
import type { PageParams } from '@/types/next';
import { Group, Paper, Stack, Text, Title } from '@mantine/core';
import { ContactForm } from './_component.tsx/contact.form';

const RoutePage = async ({}: PageParams) => {
  const user = await auth();

  return (
    <Stack justify="center" align="center">
      <Title>Contact us</Title>
      <Paper withBorder p="xl">
        <Group>
          <div></div>
          <Stack>
            <Text>Send us a message</Text>
            <ContactForm name={user?.name} email={user?.email} />
          </Stack>
        </Group>
      </Paper>
    </Stack>
  );
};

export default RoutePage;
