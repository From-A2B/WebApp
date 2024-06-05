import { SignInCard } from '@/components/auth/signIn/SignInCard';
import { auth } from '@/lib/auth/helper';
import type { PageParams } from '@/types/next';
import { Box, Group } from '@mantine/core';
import { RedirectType, redirect } from 'next/navigation';

const RoutePage = async ({}: PageParams) => {
  const user = await auth();

  if (user) redirect('/', RedirectType.push);

  return (
    <Group grow justify="center" align="center" h="100vh">
      <Group justify="center">
        <SignInCard withBorder py="xl" className="w-96 min-w-96" />
      </Group>

      <Box
        visibleFrom="lg"
        className="h-screen bg-cover bg-right"
        style={{ backgroundImage: `url("/assets/signinLogin.png")` }}
      />
    </Group>
  );
};

export default RoutePage;
