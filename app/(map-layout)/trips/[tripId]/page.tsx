import { MapContainer } from '@/components/map/mapContainer';
import { IsTripExistByIdQuery } from '@/features/trips/isTripExistById.query';
import { requiredAuth } from '@/lib/auth/helper';
import type { PageParams } from '@/types/next';
import { LINKS } from '@/utils/NavigationLinks';
import { Grid, GridCol } from '@mantine/core';
import { notFound, redirect } from 'next/navigation';
import { TripDetailList } from './_component/tripDetailList';

type tripParams = PageParams<{ tripId: string }>;

const RoutePage = async ({ params: { tripId } }: tripParams) => {
  await requiredAuth().catch(() => {
    redirect(LINKS.Auth.SignIn.href);
  });
  const isTripExist = await IsTripExistByIdQuery({ tripId });

  if (!isTripExist) return notFound();

  return (
    // <div className="grid grid-cols-3">
    //   <TripDetailList tripId={tripId} className="col-span-1 " />
    //   <MapContainer className="h-auto col-span-2" />
    // </div>
    <Grid>
      <GridCol span={{ BASE: 12, md: 4 }}>
        <TripDetailList tripId={tripId} />
      </GridCol>
      <GridCol span={{ BASE: 12, md: 8 }}>
        <MapContainer />
      </GridCol>
    </Grid>
  );
};

export default RoutePage;
