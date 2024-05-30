import { SignInCard } from '@/components/auth/signIn/signInCard';
import { auth } from '@/lib/auth/helper';
import type { PageParams } from '@/types/next';
import { Box, Group } from '@mantine/core';
import { RedirectType, redirect } from 'next/navigation';

const RoutePage = async ({}: PageParams) => {
  const user = await auth();

  if (user) redirect('/', RedirectType.push);

  return (
    <Group grow justify="center" align="center" h="100vh">
      <SignInCard withBorder py="xl" mx={{ base: '0', lg: 'xl' }} />

      <Box
        visibleFrom="lg"
        className="h-screen bg-cover bg-right"
        style={{ backgroundImage: `url("/assets/signinLogin.png")` }}
      />
    </Group>
  );
};

export default RoutePage;
