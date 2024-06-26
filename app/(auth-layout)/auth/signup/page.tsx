import { SignUpCard } from '@/components/auth/signUp/SignUpCard';
import { auth } from '@/lib/auth/helper';
import type { PageParams } from '@/types/next';
import { SiteConfig } from '@/utils/site-config';
import { Box, Group } from '@mantine/core';
import { redirect } from 'next/navigation';

const Page = async ({}: PageParams) => {
  const user = await auth();

  if (user) {
    redirect('/');
  }

  if (!SiteConfig.auth.password) {
    redirect('/auth/signin');
  }

  return (
    <Group grow justify="center" align="center" h="100vh">
      <Box
        visibleFrom="lg"
        className="h-screen bg-cover bg-right"
        style={{ backgroundImage: `url("/assets/signUp.png")` }}
      />
      <Group justify="center">
        <SignUpCard withBorder py="xl" className="w-96 min-w-96" />
      </Group>
    </Group>
  );
};

export default Page;
