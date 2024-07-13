import { LINKS } from '@/utils/NavigationLinks';
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Button,
  Container,
  Paper,
  Title,
} from '@mantine/core';
import Link from 'next/link';

const RoutePage = () => {
  return (
    <Container ta="center" size="md">
      <Paper shadow="lg" mt="xl" p="xl">
        <Title order={1} mb="lg">
          Frequently Asked Questions
        </Title>
        <Accordion variant="separated">
          <AccordionItem value="reset-password">
            <AccordionControl>How do I reset my password?</AccordionControl>
            <AccordionPanel>
              To reset your password, click on the "Forgot Password?" link on
              the login page. You will receive an email with instructions to
              reset your password.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="another-account">
            <AccordionControl>
              Can I create more than one account?
            </AccordionControl>
            <AccordionPanel>
              No, you can only create one account per email address. If you need
              help accessing your account, please contact our support team.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="newsletter">
            <AccordionControl>How do I create my trip?</AccordionControl>
            <AccordionPanel>
              To create your trip, please log into your account and click on
              "Create a Trip". You can then add destinations, dates, and
              activities to your trip.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="credit-card">
            <AccordionControl>How do I delete my account?</AccordionControl>
            <AccordionPanel>
              To delete your account, please contact our support team. We will
              be happy to help you delete your account.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="payment">
            <AccordionControl>Is my personal data secure?</AccordionControl>
            <AccordionPanel>
              Yes, we take the security of your personal data very seriously. We
              use advanced security measures to protect your personal
              information.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="change-email">
            <AccordionControl>
              How can I change my email address?
            </AccordionControl>
            <AccordionPanel>
              You can change your email address in your account settings. Log
              into your account and click on "Edit Account Settings".
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Button
          component={Link}
          href={LINKS.Support.Contact.href}
          variant="gradient"
          gradient={{ from: 'teal', to: 'dark', deg: 200 }}
          mt="xl"
          size="lg"
        >
          Need to contact us?
        </Button>
      </Paper>
    </Container>
  );
};

export default RoutePage;
