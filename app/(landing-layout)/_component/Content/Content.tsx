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
import { FeatureCard } from '../featureCard/FeatureCard';
import { IconCompass, IconDownload, IconGlobe, IconMap, IconTicket, IconTimeline } from '@tabler/icons-react';

export const Content = () => {
  return (
    <>
      <Container size="xl" mt={50}>
        <Stack w={400}>
          <Title order={1} c="teal" fw={900}>Create your trip easily!</Title>
        </Stack>
        <Stack w={600}>
          <Text size="lg" c="teal" mt="sm">
            By using our web application, you can plan and customize your trip easily in a few steps.
          </Text>
        </Stack>
        <div className="w-full p-4">
          <div className="flex items-center justify-between">
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
          <div className="flex justify-between mt-4">
            <Box w="32%">
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Title order={3} fw={900}>Create a trip</Title>
                <Text size="sm" mt="sm" c='dimmed'>
                  Create your trip easily by filling in the various form fields to make your experience complete. Once your trip is created, you can then add steps.
                </Text>
              </Card>
            </Box>
            <Box w="32%">
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Title order={3} fw={900}>Add steps</Title>
                <Text size="sm" mt="sm" c='dimmed'>
                  Add new steps or activities to your trip in a few clicks. Whether it's sightseeing, dining, or adventure, you can create a detailed itinerary for your trip.
                </Text>
              </Card>
            </Box>
            <Box w="32%">
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Title order={3} fw={900}>AI Recommendations</Title>
                <Text size="sm" mt="sm" c='dimmed'>
                  Our advanced AI technology analyzes your preferences and suggests the best steps and activities for your trip. Discover hidden gems, popular attractions, and favorites.
                </Text>
              </Card>
            </Box>
          </div>
        </div>
      </Container>
      <Divider size={70} color='teal'/>
      <Container size="xl" mt={50}>
        <Grid align="center">
          <GridCol span={6}>
          <iframe src="https://giphy.com/embed/BcubuDnDW0uze" width="480" height="326"  className="giphy-embed rounded-md" allowFullScreen></iframe>
          </GridCol>
          <GridCol span={6} >
              <Title order={1} c="teal" fw={900}>Interact with the map</Title>
              <Flex direction="row" gap="md" mt={20} align="flex-start">
                <Text>
                  <strong className='text-xl'>Destination</strong><br/>
                  Choose your destination
                </Text>
                <Text>
                  <strong className='text-xl'>Dates</strong><br/>
                  Select the dates that suit you
                </Text>
                <Text>
                  <strong className='text-xl'>Details</strong><br/>
                  Add the details of your step
                </Text>
              </Flex>
              <Title order={2} fw={700} mt="xl">
                Confirm and the map updates!
              </Title>
          </GridCol>
        </Grid>
        <Divider size={2} mt="xl" pb="xl" color='teal'/>
      </Container>
      <Container size="xl" mt={50}>
        <Stack w={400}>
          <Title order={1} c="teal" fw={900}>Features</Title>
        </Stack>
        <Stack w={600}>
          <Text size="lg" c="teal" mt="sm">
            Here is the list of features included in our application and which you can discover.
          </Text>
        </Stack>
        <SimpleGrid mt={20} cols={3} spacing="lg">
          <FeatureCard
            icon={<IconGlobe color="teal" size={24} />}
            title="Un voyage sur mesure"
            description="Trouvez des destinations pour votre prochain voyage"
          />
          <FeatureCard
            icon={<IconMap color="teal" size={24} />}
            title="Planifiez votre itinéraire"
            description="Créez votre itinéraire de bout en bout"
          />
          <FeatureCard
            icon={<IconCompass color="teal" size={24} />}
            title="Proposition d'activités"
            description="Recevez des propositions d'activités en fonction de vos préférences"
          />
          <FeatureCard
            icon={<IconTimeline color="teal" size={24} />}
            title="Calcul de l'estimation du temps"
            description="Calculez l'estimation du temps pour chaque activité"
          />
          <FeatureCard
            icon={<IconTicket color="teal" size={24} />}
            title="Réservez vos billets"
            description="Réservez vos billets d'avion, de train ou de bus"
          />
          <FeatureCard
            icon={<IconDownload color="teal" size={24} />}
            title="Téléchargez votre itinéraire"
            description="Téléchargez votre itinéraire pour l'utiliser hors ligne"
          />
        </SimpleGrid>
      </Container>
    </>
  );
};