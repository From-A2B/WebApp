'use client';
import {
  Container,
  Stack,
  Text,
  Title,
  Divider,
  useMantineTheme,
} from '@mantine/core';
import { TimelineAnimation } from './TimelineAnimation/TimelineAnimation';


export const StepSection = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Container size="xl" py={50}>
        <Stack w="100%" maw={400}>
          <Title order={1} c="teal" fw={900}>Create your trip easily!</Title>
        </Stack>
        <Stack w="100%" maw={600}>
          <Text size="lg" c="teal" mt="sm">
            By using our web application, you can plan and customize your trip easily in a few steps.
          </Text>
        </Stack>
        <TimelineAnimation theme={theme} />
        <Divider size={2} color="teal" mt="xl" />
      </Container>
    </>
  );
};
