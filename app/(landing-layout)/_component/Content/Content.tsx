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
  Group,
  Center,
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
    Icon: FileTextIcon as React.ElementType,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: InputIcon as React.ElementType,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: GlobeIcon as React.ElementType,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: CalendarIcon as React.ElementType,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4",
  },
  {
    Icon: BellIcon as React.ElementType,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4",
  },
  {
    Icon: IconGlobe as React.ElementType,
    name: "A customized journey",
    description: "Find destinations for your next trip",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-3",
  },
  {
    Icon: IconMap as React.ElementType,
    name: "Plan your itinerary",
    description: "Create your itinerary from start to finish",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-3 lg:row-end-5 lg:col-start-3 lg:col-end-4",
  },
  {
    Icon: IconCompass as React.ElementType,
    name: "Activity suggestions",
    description: "Receive activity suggestions based on your preferences",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-4 lg:row-end-5 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: IconTimeline as React.ElementType,
    name: "Time estimate calculation",
    description: "Calculate the estimated time for each activity",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-4 lg:row-end-5 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: IconTicket as React.ElementType,
    name: "Book your tickets",
    description: "Book your flight, train, or bus tickets",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-5 lg:row-end-6 lg:col-start-1 lg:col-end-3",
  },
  {
    Icon: IconDownload as React.ElementType,
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
        <Box className="w-full p-4">
          <Flex align="center" justify="space-between" className="w-full invisible lg:visible">
            <Group>
              <Center className="w-10 h-10 bg-green-600 rounded-full text-white font-bold">1</Center>
            </Group>
            <Box className="h-0.5 w-full bg-green-400" />
            <Group>
              <Center className="w-10 h-10 bg-green-600 rounded-full text-white font-bold">2</Center>
            </Group>
            <Box className="h-0.5 w-full bg-green-400" />
            <Group>
              <Center className="w-10 h-10 bg-green-600 rounded-full text-white font-bold">3</Center>
            </Group>
            <Box className="h-0.5 w-full bg-green-400" />
          </Flex>
          <Flex direction={{ base: "column", lg: "row" }} justify={{ lg: "space-between" }} mt="xl">
            <Box w={{ base: "100%", lg: "32%" }} mt={{ base: "xl", lg: 0 }}>
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Flex align="center" mb="md" hiddenFrom="lg">
                  <Center className="w-10 h-10 bg-green-600 rounded-full text-white font-bold">1</Center>
                </Flex>
                <Title order={3} fw={900}>Create a trip</Title>
                <Text size="sm" mt="sm" c='dimmed'>
                  Create your trip easily by filling in the various form fields to make your experience complete. Once your trip is created, you can then add steps.
                </Text>
              </Card>
            </Box>
            <Box w={{ base: "100%", lg: "32%" }} mt={{ base: "xl", lg: 0 }}>
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Flex align="center" mb="md" hiddenFrom="lg">
                  <Center className="w-10 h-10 bg-green-600 rounded-full text-white font-bold">2</Center>
                </Flex>
                <Title order={3} fw={900}>Add steps</Title>
                <Text size="sm" mt="sm" c='dimmed'>
                  Add new steps or activities to your trip in a few clicks. Whether it's sightseeing, dining, or adventure, you can create a detailed itinerary for your trip.
                </Text>
              </Card>
            </Box>
            <Box w={{ base: "100%", lg: "32%" }} mt={{ base: "xl", lg: 0 }}>
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Flex align="center" mb="md" hiddenFrom="lg">
                  <Center className="w-10 h-10 bg-green-600 rounded-full text-white font-bold">3</Center>
                </Flex>
                <Title order={3} fw={900}>AI Recommendations</Title>
                <Text size="sm" mt="sm" c='dimmed'>
                  Our AI technology analyzes your preferences and suggests the best steps and activities for you. Discover hidden gems, popular attractions, and more.
                </Text>
              </Card>
            </Box>
          </Flex>
        </Box>
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