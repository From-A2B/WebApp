import {
  Button,
  Container,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { requiredAuth } from '@/lib/auth/helper';

const RoutePage = async () => {

  const user = await requiredAuth();
  const isEmailNotVerified = user.email && !user.emailVerified;

  return (
    <Container>
      {isEmailNotVerified && (
        <Stack>
          <Title>Dashboard</Title>
          <Divider mb="md" />
          <Group justify='center'>
            <Text></Text>
          </Group>
        </Stack>
      )}
    </Container>
  );
};

export default RoutePage;
