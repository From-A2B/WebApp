'use client';

import { Box } from '@mantine/core';
import { useState } from 'react';
import { Map } from 'react-map-gl';

export type MapContainerProps = {};

export const MapContainer = ({}: MapContainerProps) => {
  const [viewState, setViewState] = useState({
    longitude: 4.860200783597507,
    latitude: 45.73050608112574,
    zoom: 2,
    pitch: 30,
    bearing: 0,
  });

  return (
    <>
      <Box pos="relative" h={'90vh'} w={'50vw'}>
        <Map
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          minZoom={2}
          dragRotate={true}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          mapboxAccessToken="pk.eyJ1IjoiZGVyY3Jha2VyIiwiYSI6ImNsdHVnczc4dTB6N2QyanFwZDR1N2c2eHoifQ.arP7tBErlINY3-uiwfb7Ww"
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
