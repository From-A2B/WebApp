import { GoBackButton } from '@/features/button/GoBackButton';
import { LINKS } from '@/utils/NavigationLinks';
import {
  Badge,
  Button,
  ButtonGroup,
  Center,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <Container>
      <Center h="100vh">
        <Stack justify="center" align="center" ta="center">
          <Badge color="red" radius="sm" variant="outline">
            404
          </Badge>
          <Title order={1}>Page not found</Title>
          <Text>Sorry, we couldn't find the page you're looking for.</Text>
          <Group justify="center" align="center">
            <ButtonGroup>
              <GoBackButton
                buttonProps={{ variant: 'outline', fullWidth: true }}
              />
              <Button
                variant="outline"
                fullWidth
                component={Link}
                href={LINKS.Landing.Landing.href}
              >
                Go home
              </Button>
            </ButtonGroup>
            <Button
              variant="outline"
              component={Link}
              href={LINKS.Support.Contact.href}
            >
              Contact Support
            </Button>
          </Group>
        </Stack>
      </Center>
    </Container>
  );
};

export default NotFoundPage;
