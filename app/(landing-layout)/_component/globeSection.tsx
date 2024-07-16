import {
  Container,
  Text,
  Title,
  Divider,
  Grid,
  GridCol,
  Flex,
  Group,
  Box,
} from '@mantine/core';
import Globe from '@/components/magicui/globe';

export const GlobeSection = () => {
  return (
    <Container size="xl">
      <Grid gutter="xl">
        <GridCol span={{ xs: 12, md: 6 }} mt={{ base: 20, md: 0 }}>
          <Box pos="relative" ta="center" flex="flex" className="pb-40 pt-8">
            <Globe className="w-64" />
          </Box>
        </GridCol>
        <GridCol span={{ xs: 12, md: 6 }}>
          <Title order={1} c="teal" fw={900} my="lg">
            Interact with the map
          </Title>
          <Group
            dir="row"
            gap="md"
            mt={{ xs: 20, md: 0 }}
            wrap="nowrap"
            align="center"
          >
            <Text>
              <strong className="text-xl">Destination</strong>
              <br />
              Choose your destination
            </Text>
            <Text>
              <strong className="text-xl">Dates</strong>
              <br />
              Select the dates that suit you
            </Text>
            <Text>
              <strong className="text-xl">Details</strong>
              <br />
              Add the details of your step
            </Text>
          </Group>
          <Title order={2} fw={700} my={{ xs: 20, md: 'xl' }}>
            Confirm and the map updates!
          </Title>
        </GridCol>
      </Grid>
      <Divider size={2} color="teal" mt="xl" />
    </Container>
  );
};
