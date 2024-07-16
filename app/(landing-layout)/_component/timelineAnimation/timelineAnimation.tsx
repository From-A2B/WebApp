import React, { useEffect } from 'react';
import type { MantineTheme } from '@mantine/core';
import { Box, Flex, Group, Center, Title, Text, Card } from '@mantine/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const TimelineAnimation = ({ theme }: { theme: MantineTheme }) => {
  useEffect(() => {
    const steps = ['.animate-step-1', '.animate-step-2', '.animate-step-3'];

    steps.forEach((step, index) => {
      gsap.fromTo(
        step,
        {
          x: -100,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          x: 0,
          opacity: 1,
          duration: 0.5,
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <Box className="w-full p-4">
      <Flex
        align="center"
        justify="space-between"
        className="w-full"
        visibleFrom="lg"
      >
        <Box
          className="h-0.5 w-full animate-step-1"
          style={{ background: theme.colors.primaryColor[9] }}
        />
        <Group className="animate-step-1">
          <Center
            className="w-10 h-10 rounded-full text-white font-bold"
            style={{ background: theme.colors.primaryColor[9] }}
          >
            1
          </Center>
        </Group>
        <Box
          className="h-0.5 w-full animate-step-2"
          style={{ background: theme.colors.primaryColor[9] }}
        />
        <Group className="animate-step-2">
          <Center
            className="w-10 h-10 rounded-full text-white font-bold"
            style={{ background: theme.colors.primaryColor[9] }}
          >
            2
          </Center>
        </Group>
        <Box
          className="h-0.5 w-full animate-step-3"
          style={{ background: theme.colors.primaryColor[9] }}
        />
        <Group className="animate-step-3">
          <Center
            className="w-10 h-10 rounded-full text-white font-bold"
            style={{ background: theme.colors.primaryColor[9] }}
          >
            3
          </Center>
        </Group>
      </Flex>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justify={{ lg: 'space-between' }}
        mt="xl"
      >
        <Box
          w={{ base: '100%', lg: '32%' }}
          mt={{ base: 'xl', lg: 0 }}
          className="animate-step-1"
        >
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Flex align="center" mb="md" hiddenFrom="lg">
              <Center
                className="w-10 h-10 rounded-full text-white font-bold"
                style={{ background: theme.colors.primaryColor[9] }}
              >
                1
              </Center>
            </Flex>
            <Title order={3} fw={900}>
              Create a trip
            </Title>
            <Text size="sm" mt="sm" c="dimmed">
              Create your trip easily by filling in the various form fields to
              make your experience complete. Once your trip is created, you can
              then add steps.
            </Text>
          </Card>
        </Box>
        <Box
          w={{ base: '100%', lg: '32%' }}
          mt={{ base: 'xl', lg: 0 }}
          className="animate-step-2"
        >
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Flex align="center" mb="md" hiddenFrom="lg">
              <Center
                className="w-10 h-10 rounded-full text-white font-bold"
                style={{ background: theme.colors.primaryColor[9] }}
              >
                2
              </Center>
            </Flex>
            <Title order={3} fw={900}>
              Add steps
            </Title>
            <Text size="sm" mt="sm" c="dimmed">
              Add new steps or activities to your trip in a few clicks. Whether
              it's sightseeing, dining, or adventure, you can create a detailed
              itinerary for your trip.
            </Text>
          </Card>
        </Box>
        <Box
          w={{ base: '100%', lg: '32%' }}
          mt={{ base: 'xl', lg: 0 }}
          className="animate-step-3"
        >
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Flex align="center" mb="md" hiddenFrom="lg">
              <Center
                className="w-10 h-10 rounded-full text-white font-bold"
                style={{ background: theme.colors.primaryColor[9] }}
              >
                3
              </Center>
            </Flex>
            <Title order={3} fw={900}>
              AI Recommendations
            </Title>
            <Text size="sm" mt="sm" c="dimmed">
              Our AI technology analyzes your preferences and suggests the best
              steps and activities for you. Discover hidden gems, popular
              attractions, and more.
            </Text>
          </Card>
        </Box>
      </Flex>
    </Box>
  );
};
