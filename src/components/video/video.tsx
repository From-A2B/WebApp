import type { ReactNode } from 'react';
import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from '@mantine/core';

type VideoProps = {
  source: string;
  children?: ReactNode;
};

export const Video = ({ source, children }: VideoProps) => {
  return (
    <Box pos="relative">
      <ReactPlayer url={source} muted loop playing width="100%" height="100%" />
      <Box
        display="flex"
        pos="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        style={{
          zIndex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
