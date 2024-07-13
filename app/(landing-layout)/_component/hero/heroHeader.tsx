'use client';

import { Button, Container, Text, Title, Overlay, Flex } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { Video } from '~/src/components/video/video';
import { LINKS } from '@/utils/NavigationLinks';

export const HeroImageBackground: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(LINKS.Dashboard.Trips.href);
  };

  return (
    <Video source='https://videos.pexels.com/video-files/5379990/5379990-uhd_2560_1440_24fps.mp4'>
      <Overlay color="#000" opacity={0.65} zIndex={1} />
      <Container style={{ zIndex: 2 }}>
        <Title
          order={1}
          ta="center"
          c="white"
          fw={900}
          lts={2}
        >
          Create your dream trip
        </Title>
        <Container size={640}>
          <Text
            size="xl"
            ta="center"
            c="white"
          >
            Explore, plan, and book your next adventure
          </Text>
        </Container>
        <Flex justify="center" mt={16}>
          <Button
            variant="outline"
            color="white"
            size="xl"
            onClick={handleButtonClick}
          >
            Start
          </Button>
        </Flex>
      </Container>
    </Video>
  );
};
