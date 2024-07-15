import {
  Card,
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
import { DASHBOARD_NAVIGATION_LINKS } from '~/src/utils/NavigationLinks';
import Link from 'next/link';

const RoutePage = async () => {
  const user = await requiredAuth();
  const isEmailNotVerified = user.email && !user.emailVerified;

  return (
    <Container>
      {isEmailNotVerified && (
        <Stack>
          <Title>Dashboard</Title>
          <Divider mb="md" />
          <Group justify="center">
            <Text>
              Start creating the travels of our dreams with us. You can
              navigates to the different sections below
            </Text>
          </Group>
            {DASHBOARD_NAVIGATION_LINKS.map((group, idx) => {
              const items = group.links.map((link, idx) => (
                <Card w="30%" key={idx} withBorder p="lg">
                    <Group align="center">
                      {link.icon}
                      {link.label}
                    </Group>
                    <Group mt='xs'>
                      <Text>{link.description}</Text>
                    </Group>
                  <Button component={Link} href={link.href} mt='xs'>See more</Button>
                </Card>
              ));

              return (
                <Group justify='center' mt="xl">{items}</Group>
              );
            })}
        </Stack>
      )}
    </Container>
  );
};

export default RoutePage;
