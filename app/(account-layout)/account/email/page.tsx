import { ContactSupportDialog } from '@/components/contact/support/ContactSupportDialog';
import { requiredAuth } from '@/lib/auth/helper';
import { Badge, Paper, Text, Title } from '@mantine/core';

const MailProfilePage = async () => {
  const user = await requiredAuth();

  return (
    <Paper radius="lg" p="xl" withBorder my="md">
      <Title order={2}>Mail settings</Title>
      <Text>
        Update your email notifications settings to match your preferences
      </Text>
      <ContactSupportDialog />
    </Paper>
  );
};

export default MailProfilePage;

const ErrorComponent = () => {
  return (
    <Paper radius="lg" p="xl" withBorder my="md">
      <Badge color="red">Error</Badge>
      <Title>Resend Account Not Found</Title>
      <Text>{`We couldn't find your Resend contact. Please contact support.`}</Text>
      <ContactSupportDialog />
    </Paper>
  );
};
