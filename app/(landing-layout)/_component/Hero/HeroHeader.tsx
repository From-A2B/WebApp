'use client';

import { Button, Container, Text, Title, Overlay } from '@mantine/core';
import { useRouter } from 'next/navigation';
import './HeroImageBackground.scss';
import { Video } from '@/components/video/Video';

export const HeroImageBackground: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/trips');
  }

  return (
    <Video source='https://videos.pexels.com/video-files/5379990/5379990-uhd_2560_1440_24fps.mp4'>
      <Overlay color="#000" opacity={0.65} zIndex={1} />
      <div className="hero__inner">
        <Title className="hero__title">Create your dream trip</Title>
        <Container size={640}>
          <Text size="xl" className="hero__description">
            Explore, plan, and book your next adventure
          </Text>
        </Container>
        <div className="hero__controls">
          <Button
            className="hero__control"
            variant="outline"
            color="white"
            size="xl"
            onClick={handleButtonClick}>
            Start
          </Button>
        </div>
      </div>
    </Video>
  );
};
