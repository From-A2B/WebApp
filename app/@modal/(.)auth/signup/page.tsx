'use client';

import { SignUpCard } from '@/components/auth/signUp/signUpCard';
import { LINKS } from '@/utils/NavigationLinks';
import { Modal } from '@mantine/core';
import { usePathname, useRouter } from 'next/navigation';

const RoutePage = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <Modal.Root
      opened={path.endsWith(LINKS.Auth.SignUp.href)}
      onClose={() => router.back()}
      size={'auto'}
    >
      <Modal.Overlay backgroundOpacity={0.55} blur={3} />
      <Modal.Content>
        <SignUpCard withBorder className="w-96" py="xl" />
      </Modal.Content>
    </Modal.Root>
  );
};

export default RoutePage;
