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
} from '@mantine/core';
import { IconCompass, IconDownload, IconGlobe, IconMap, IconTicket, IconTimeline } from '@tabler/icons-react';
import { ClientReviews } from '../featureCard/ClientReviews/ClientReviews';
import Globe from '@/components/magicui/globe';
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4",
  },
  {
    Icon: IconGlobe,
    name: "A customized journey",
    description: "Find destinations for your next trip",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-3",
  },
  {
    Icon: IconMap,
    name: "Plan your itinerary",
    description: "Create your itinerary from start to finish",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-3 lg:row-end-5 lg:col-start-3 lg:col-end-4",
  },
  {
    Icon: IconCompass,
    name: "Activity suggestions",
    description: "Receive activity suggestions based on your preferences",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-4 lg:row-end-5 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: IconTimeline,
    name: "Time estimate calculation",
    description: "Calculate the estimated time for each activity",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-4 lg:row-end-5 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: IconTicket,
    name: "Book your tickets",
    description: "Book your flight, train, or bus tickets",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-5 lg:row-end-6 lg:col-start-1 lg:col-end-3",
  },
  {
    Icon: IconDownload,
    name: "Download your itinerary",
    description: "Download your itinerary for offline use",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-5 lg:row-end-6 lg:col-start-3 lg:col-end-4",
  },
];


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
            <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg px-40 pb-40 pt-8 md:pb-60">
              <Globe className='w-64' />
              <div className="pointer-events-none absolute inset-0 h-full" />
            </div>
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
        <BentoGrid className="lg:grid-rows-3 mb-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
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