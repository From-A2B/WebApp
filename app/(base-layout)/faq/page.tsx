'use client'

import { Accordion, Button, Container, Paper, Title } from '@mantine/core';
import Link from 'next/link';
import { LINKS } from '@/utils/NavigationLinks';

const RoutePage = () => {
  return (
    <Container ta="center" size="md">
      <Paper shadow="lg" mt="xl" p="xl">
        <Title order={1} mb="lg">
          Frequently Asked Questions
        </Title>
        <Accordion variant="separated">
          <Accordion.Item value="reset-password">
            <Accordion.Control>
              How do I reset my password?
            </Accordion.Control>
            <Accordion.Panel>
              To reset your password, click on the "Forgot Password?" link on the login page. You will receive an email with instructions to reset your password.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="another-account">
            <Accordion.Control>
              Can I create more than one account?
            </Accordion.Control>
            <Accordion.Panel>
              No, you can only create one account per email address. If you need help accessing your account, please contact our support team.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="newsletter">
            <Accordion.Control>How do I create my trip?</Accordion.Control>
            <Accordion.Panel>
              To create your trip, please log into your account and click on "Create a Trip". You can then add destinations, dates, and activities to your trip.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="credit-card">
            <Accordion.Control>
              How do I delete my account?
            </Accordion.Control>
            <Accordion.Panel>
              To delete your account, please contact our support team. We will be happy to help you delete your account.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="payment">
            <Accordion.Control>
              Is my personal data secure?
            </Accordion.Control>
            <Accordion.Panel>
              Yes, we take the security of your personal data very seriously. We use advanced security measures to protect your personal information.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="change-email">
            <Accordion.Control>
              How can I change my email address?
            </Accordion.Control>
            <Accordion.Panel>
              You can change your email address in your account settings. Log into your account and click on "Edit Account Settings".
            </Accordion.Panel>
          </Accordion.Item>
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