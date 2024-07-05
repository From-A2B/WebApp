'use client'; 
import {
  Container,
  Stack,
  Text,
  Title,
  Divider,
  Grid,
  GridCol,
  Flex,
  useMantineTheme,
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
import { TimelineAnimation } from '../TimelineAnimation';

const features = [
  {
    Icon: FileTextIcon as React.ElementType,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: InputIcon as React.ElementType,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: GlobeIcon as React.ElementType,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: CalendarIcon as React.ElementType,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4",
  },
  {
    Icon: BellIcon as React.ElementType,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4",
  },
  {
    Icon: IconGlobe as React.ElementType,
    name: "A customized journey",
    description: "Find destinations for your next trip",
    href: "/",
    cta: "Learn more",
    className: "lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-3",
  },
  {
    Icon: IconMap as React.ElementType,
    name: "Plan your itinerary",
    description: "Create your itinerary from start to finish",
    href: "/",
    cta: "Learn more",
    className: "lg:row-start-3 lg:row-end-5 lg:col-start-3 lg:col-end-4",
  },
  {
    Icon: IconCompass as React.ElementType,
    name: "Activity suggestions",
    description: "Receive activity suggestions based on your preferences",
    href: "/",
    cta: "Learn more",
    className: "lg:row-start-4 lg:row-end-5 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: IconTimeline as React.ElementType,
    name: "Time estimate calculation",
    description: "Calculate the estimated time for each activity",
    href: "/",
    cta: "Learn more",
    className: "lg:row-start-4 lg:row-end-5 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: IconTicket as React.ElementType,
    name: "Book your tickets",
    description: "Book your flight, train, or bus tickets",
    href: "/",
    cta: "Learn more",
    className: "lg:row-start-5 lg:row-end-6 lg:col-start-1 lg:col-end-3",
  },
  {
    Icon: IconDownload as React.ElementType,
    name: "Download your itinerary",
    description: "Download your itinerary for offline use",
    href: "/",
    cta: "Learn more",
    className: "lg:row-start-5 lg:row-end-6 lg:col-start-3 lg:col-end-4",
  },
];

export const Content = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Container size="xl" py={50}>
        <Stack w="100%" maw={400}>
          <Title order={1} c="teal" fw={900}>Create your trip easily!</Title>
        </Stack>
        <Stack w="100%" maw={600}>
          <Text size="lg" c="teal" mt="sm">
            By using our web application, you can plan and customize your trip easily in a few steps.
          </Text>
        </Stack>
        <TimelineAnimation theme={theme} />
        <Divider size={2} color="teal" mt="xl" />
      </Container>
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
        <Divider size={2} color="teal" mt="xl" />
      </Container>
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
