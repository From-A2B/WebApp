import { Container, Card, Avatar, Group, Text, Title, SimpleGrid } from '@mantine/core';

export const ClientReviews = () => {
  const reviews = [
    {
      name: 'John Smith',
      review: "I love using this trip planner! It has made trip planning much easier and more organized. The AI customization feature is a game changer!",
    },
    {
      name: 'Emily Johnson',
      review: "This trip planner has been a lifesaver for me. I travel frequently for work, and it has made managing my trips so much easier. The dashboard with statistics is a great way to track my progress and see how much I've traveled.",
    },
    {
      name: 'Michael Davis',
      review: "I cannot recommend this trip planner enough. It has all the features I need to plan my trips step by step. The AI customization is a nice touch, and the dashboard provides valuable information about my travels.",
    },
    {
      name: 'Sarah Thompson',
      review: "I've tried many trip planners, but this one is by far the best. The AI customization feature really understands my preferences and suggests perfect trips. The dashboard is also very informative and helps me track my travel goals.",
    },
    {
      name: 'David Wilson',
      review: "I am amazed at how intuitive and user-friendly this trip planner is. It has made trip planning a fun and enjoyable experience. The dashboard with statistics is excellent motivation to keep exploring and traveling.",
    },
  ];  

  return (
    <Container size="xl" mt={50}>
      <SimpleGrid cols={2} spacing="lg">
        {reviews.map((review, index) => (
          <Card key={index} shadow="sm" p="lg" radius="md" withBorder>
            <Group wrap='nowrap'>
              <Avatar color="black" radius="xl" size="lg">
                {review.name.split(' ').map(n => n[0]).join('')}
              </Avatar>
              <div>
                <Title order={4}>{review.name}</Title>
                <Text size="sm" color="dimmed">{review.review}</Text>
              </div>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}