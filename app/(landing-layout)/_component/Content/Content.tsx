import {
  Container,
  Stack,
  Text,
  Title,
  Card,
  Box,
  Divider,
  Grid,
  GridCol,
  Flex,
  SimpleGrid,
} from '@mantine/core';
import { IconCompass, IconDownload, IconGlobe, IconMap, IconTicket, IconTimeline } from '@tabler/icons-react';
import { FeatureCard } from '../featureCard/FeatureCard';
import { ClientReviews } from '../featureCard/ClientReviews/ClientReviews';

export const Content = () => {
  return (
    <>
      <Container size="xl" py={50}>
        <Stack w="100%" maw={400}>
          <Title order={1} c="teal" fw={900}>Create your trip easily!</Title>
        </Stack>
        <Stack  w="100%" maw={600}>
          <Text size="lg" c="teal" mt="sm">
            By using our web application, you can plan and customize your trip easily in a few steps.
          </Text>
        </Stack>
        <div className="w-full p-4">
          <div className="flex items-center justify-between w-full invisible lg:visible">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-full text-white font-bold">
                1
              </div>
            </div>
            <div className="h-0.5 w-full bg-green-400"></div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-full text-white font-bold">
                2
              </div>
            </div>
            <div className="h-0.5 w-full bg-green-400"></div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-full text-white font-bold">
                3
              </div>
            </div>
            <div className="h-0.5 w-full bg-green-400"></div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-4 mt-4">
            <Box w={{ base: "100%", lg: "32%" }} mt={{ base: "xl", lg: 0 }}>
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <div className="flex items-center mb-2 lg:hidden">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-full text-white font-bold">
                    1
                  </div>
                </div>
                <Title order={3} fw={900}>Create a trip</Title>
                <Text size="sm" mt="sm" c='dimmed'>
                  Create your trip easily by filling in the various form fields to make your experience complete. Once your trip is created, you can then add steps.
                </Text>
              </Card>
            </Box>
            <Box w={{ base: "100%", lg: "32%" }} mt={{ base: "xl", lg: 0 }}>
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <div className="flex items-center mb-2 lg:hidden">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-full text-white font-bold">
                    2
                  </div>
                </div>
                <Title order={3} fw={900}>Add steps</Title>
                <Text size="sm" mt="sm" c='dimmed'>
                  Add new steps or activities to your trip in a few clicks. Whether it's sightseeing, dining, or adventure, you can create a detailed itinerary for your trip.
                </Text>
              </Card>
            </Box>
            <Box w={{ base: "100%", lg: "32%" }} mt={{ base: "xl", lg: 0 }}>
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <div className="flex items-center mb-2 lg:hidden">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-full text-white font-bold">
                    3
                  </div>
                </div>
                <Title order={3} fw={900}>AI Recommendations</Title>
                <Text size="sm" mt="sm" c='dimmed'>
                  Our AI technology analyzes your preferences and suggests the best steps and activities for you. Discover hidden gems, popular attractions, and more.
                </Text>
              </Card>
            </Box>
          </div>
        </div>
      </Container>
      <Divider size={70} color="teal" />
      <Container size="xl" py={{ xs: 20, md: 50 }}>
        <Grid gutter="xl">
          <GridCol span={{ xs: 12, md: 6 }} mt={{ base: 20, md: 0 }}>
            <iframe src="https://giphy.com/embed/BcubuDnDW0uze" width="100%" height="326" className="giphy-embed rounded-md" allowFullScreen></iframe>
          </GridCol>
          <GridCol span={{ xs: 12, md: 6 }}>
            <Title order={1} c="teal" fw={900}>Interact with the map</Title>
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
      <Container size="xl" mt="sm">
        <Stack w="100%" maw={400}>
          <Title order={1} c="teal" fw={900}>Features</Title>
        </Stack>
        <Stack w="100%" maw={600}>
          <Text size="lg" c="teal" my="sm">
            Here is the list of features included in our application and which you can discover.
          </Text>
        </Stack>
        <SimpleGrid cols={{ base: 1, lg: 2 }} spacing={{ base: 10, sm: 'xl' }} verticalSpacing={{ base: 'md' }} my="xl">
          <FeatureCard
            icon={<IconGlobe color="teal" size={24} />}
            title="A customized journey"
            description="Find destinations for your next trip"
          />
          <FeatureCard
            icon={<IconMap color="teal" size={24} />}
            title="Plan your itinerary"
            description="Create your itinerary from start to finish"
          />
          <FeatureCard
            icon={<IconCompass color="teal" size={24} />}
            title="Activity suggestions"
            description="Receive activity suggestions based on your preferences"
          />
          <FeatureCard
            icon={<IconTimeline color="teal" size={24} />}
            title="Time estimate calculation"
            description="Calculate the estimated time for each activity"
          />
          <FeatureCard
            icon={<IconTicket color="teal" size={24} />}
            title="Book your tickets"
            description="Book your flight, train, or bus tickets"
          />
          <FeatureCard
            icon={<IconDownload color="teal" size={24} />}
            title="Download your itinerary"
            description="Download your itinerary for offline use"
          />
        </SimpleGrid>
      </Container>
      <Divider size={70} color="teal" />
      <Container size="xl" py={50}>
        <Stack w="100%" maw={400}>
          <Title order={1} c="teal" fw={900}>What people say about us</Title>
        </Stack>
        <Stack w="100%" maw={600}>
          <Text size="lg" c="teal" mt="sm">
            Discover what our users have to say about their experience with our trip planner.
          </Text>
        </Stack>
        <ClientReviews />
      </Container>
    </>
  );
};