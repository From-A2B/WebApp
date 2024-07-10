import { ContactSupportDialog } from '@/components/contact/support/ContactSupportDialog';
import { getError } from '@/features/auth/error/auth-error-mapping';
import type { PageParams } from '@/types/next';
import { LINKS } from '@/utils/NavigationLinks';
import {
  Badge,
  Button,
  Container,
  Divider,
  Group,
  Paper,
  Title,
} from '@mantine/core';
import Link from 'next/link';

const AuthErrorPage = ({ searchParams }: PageParams) => {
  const { errorMessage, error } = getError(searchParams.error);

  return (
    <Container m="md">
      <Title order={1}>Authentification Error</Title>
      <Divider mb="lg" />
      <Paper p="xl" withBorder my="md" style={{ borderColor: 'red' }}>
        <Badge color="red">{error}</Badge>
        <Title order={2}>{errorMessage}</Title>
        <Group>
          <Button component={Link} href={LINKS.Landing.Landing.href}>
            Home
          </Button>
          <ContactSupportDialog />
        </Group>
      </Paper>
    </Container>
  );
};

export default AuthErrorPage;
