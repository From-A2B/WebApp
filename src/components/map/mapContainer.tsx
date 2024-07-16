'use client';

import { env } from '@/lib/env/client';
import { Box } from '@mantine/core';
import { useState } from 'react';
import { Map } from 'react-map-gl';

export type MapContainerProps = {
  className?: string;
};

export const MapContainer = ({ className }: MapContainerProps) => {
  const [viewState, setViewState] = useState({
    longitude: 4.860200783597507,
    latitude: 45.73050608112574,
    zoom: 2,
    pitch: 30,
    bearing: 0,
  });

  return (
    <>
      <Box pos="relative" h={'90vh'} w={{ BASE: '100vw', md: '65vw' }}>
        {/* <Box pos="relative" className={cn(className)}> */}
        <Map
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          minZoom={2}
          dragRotate={true}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
          attributionControl={true}
          style={{
            height: '100%',
            width: '100%',
          }}
        >
          {/* {pins}
      <Source id="routeSource" type="geojson" data={geojson}>
        <Layer {...routeLineStyle} />
      </Source>
      <GeolocateControl />
      <ScaleControl />
      <ActionIcon
        radius={'xl'}
        onClick={handleAddStepToEnd}
        size={isMobile ? 32 : 48}
        style={{ position: 'absolute', bottom: '20px', right: '20px' }}
      >
        <IconCirclePlus size={isMobile ? 32 : 48} />
      </ActionIcon> */}
        </Map>
      </Box>
    </>
  );
};
