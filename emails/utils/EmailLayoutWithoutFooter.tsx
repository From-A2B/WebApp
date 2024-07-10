import { getServerUrl } from '@/utils/server-url';
import { SiteConfig } from '@/utils/site-config';
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Tailwind,
  Text,
} from '@react-email/components';
import type { PropsWithChildren } from 'react';
import tailwindConfig from '~/tailwind.config';

export const EmailLayoutWithoutFooter = ({ children }: PropsWithChildren) => {
  const baseUrl = getServerUrl();
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <Tailwind config={tailwindConfig}>
      <Html>
        <Head />
        <Body className="bg-white font-sans">
          <Container className="mx-auto bg-contain bg-bottom bg-no-repeat p-6">
            <table cellPadding={0} cellSpacing={0}>
              <tr>
                <td className="pr-2">
                  <Img
                    src={`${baseUrl}${SiteConfig.appIcon}`}
                    width={32}
                    height={32}
                    className="inline"
                    alt={`${SiteConfig.title}'s logo`}
                  />
                </td>
                <td>
                  <Text className="text-xl font-bold">{SiteConfig.title}</Text>
                </td>
              </tr>
            </table>
            {children}
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};
