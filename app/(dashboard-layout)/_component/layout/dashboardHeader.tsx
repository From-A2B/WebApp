import AuthButton from '@/components/auth/AuthButton';
import { ContactFeedbackMenu } from '@/components/feedback/contactFeedbackMenu';
import { SiteName } from '@/components/layout/SiteName';
import { AppShellHeader, Button, Container, Group } from '@mantine/core';
import { DashboardNavigationMobile } from './dashboardNavigationMobile';

export const DashboardHeader = () => {
  return (
    <AppShellHeader>
      <Container h="100%">
        <Group align="center" justify="space-between" h="100%" hiddenFrom="md">
          <SiteName />
          <Group>
            <AuthButton />
            <ContactFeedbackMenu>
              <Button variant="outline">Feedback</Button>
            </ContactFeedbackMenu>
            <DashboardNavigationMobile />
          </Group>
        </Group>
        <Group align="center" justify="end" h="100%" visibleFrom="md">
          <ContactFeedbackMenu>
            <Button variant="outline">Feedback</Button>
          </ContactFeedbackMenu>
        </Group>
      </Container>
    </AppShellHeader>
  );
};
