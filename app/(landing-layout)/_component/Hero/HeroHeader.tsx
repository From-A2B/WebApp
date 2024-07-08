'use client';

import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import { useRouter } from 'next/navigation';
import './HeroImageBackground.scss';
import BackgroundVideo from 'next-video/background-video';
import Video from '../../../../videos/header-backgroud-video.mp4'

export const HeroImageBackground = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/trips');
  }

  return (
    <BackgroundVideo src={Video} sizes='1rem' controls={false}>
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
    </BackgroundVideo>
  );
};