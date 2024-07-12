import {
  Container,
  Stack,
  Text,
  Title,
  Divider,
} from '@mantine/core';
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { features } from "@/features/home/features";

export const FeaturesSection = () => {
  return (
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
  );
};
