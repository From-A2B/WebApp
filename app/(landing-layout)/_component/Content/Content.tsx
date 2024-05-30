import {
  Container,
  Stack,
  Text,
  Title,
  Card,
  Box,
} from '@mantine/core';

const Content = () => {
  return (
    <Container size="xl" mt={50}>
      <Stack w={400}>
        <Title order={1} c="teal" fw={900}>Créer votre voyage simplement !</Title>
      </Stack>
      <Stack w={600}>
        <Text size="lg" c="teal" mt="sm">
          En utilisant notre application web, vous pourez programmer et personnalisez votre voyage simplement en quelques étapes.
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
              <Title order={3} fw={900}>Créer un voyage</Title>
              <Text size="sm" mt="sm" c='dimmed'>
                Créez votre voyage, facilement, en complétant les différents champs de formulaire permettant de rendre votre expérience abouti. Lorsque votre voyage est créé, vous pourrez alors ajouter des étapes.
              </Text>
            </Card>
          </Box>
          <Box w="32%">
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Title order={3} fw={900}>Ajouter des étapes</Title>
              <Text size="sm" mt="sm" c='dimmed'>
                Ajoutez de nouvelles étapes ou activités à votre voyage en quelques clics. Qu'il s'agisse de visites touristiques, de restauration ou d'aventure, vous pouvez créer un itinéraire détaillé pour votre voyage.
              </Text>
            </Card>
          </Box>
          <Box w="32%">
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Title order={3} fw={900}>IA Recommandations</Title>
              <Text size="sm" mt="sm" c='dimmed'>
                Notre technologie avancée d'IA analyse vos préférences et suggère les meilleures étapes et activités pour votre voyage. Découvrez des trésors cachés, des attractions populaires et des favoris.
              </Text>
            </Card>
          </Box>
        </div>
      </div>
    </Container>
  );
};

export default Content;
