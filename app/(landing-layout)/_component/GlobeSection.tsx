import {
  Container,
  Text,
  Title,
  Divider,
  Grid,
  GridCol,
  Flex,
} from '@mantine/core';
import Globe from '@/components/magicui/globe';

export const GlobeSection = () => {
  return (
    <>
      <Container size="xl" py={{ xs: 20, md: 50 }}>
        <Grid gutter="xl">
          <GridCol span={{ xs: 12, md: 6 }} mt={{ base: 20, md: 0 }}>
            <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg px-40 pb-40 pt-8 md:pb-60">
              <Globe className='w-64' />
              <div className="pointer-events-none absolute inset-0 h-full" />
            </div>
          </GridCol>
          <GridCol span={{ xs: 12, md: 6 }}>
            <Title order={1} c="teal" fw={900} my="lg">Interact with the map</Title>
            <Flex direction="row" gap="md" mt={{ xs: 20, md: 0 }} align={{ xs: 'center', md: 'flex-start' }}>
              <Text>
                <strong className="text-xl">Destination</strong><br />
                Choose your destination
              </Text>
              <Text>
                <strong className="text-xl">Dates</strong><br />
                Select the dates that suit you
              </Text>
              <Text>
                <strong className="text-xl">Details</strong><br />
                Add the details of your step
              </Text>
            </Flex>
            <Title order={2} fw={700} mt={{ xs: 20, md: 'xl' }}>
              Confirm and the map updates!
            </Title>
          </GridCol>
        </Grid>
        <Divider size={2} color="teal" mt="xl" />
      </Container>
    </>
  );
};
