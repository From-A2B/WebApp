'use server';

import { sendEmail } from '@/lib/mail/sendEmail';
import { action } from '@/lib/server-actions/safe-actions';
import { SiteConfig } from '@/utils/site-config';
import { ContactSupportSchema } from './contact-support.schema';

export const contactSupportAction = action(
  ContactSupportSchema,
  async (data) => {
    await sendEmail({
      from: SiteConfig.email.supportFrom,
      to: SiteConfig.email.contact,
      cc: data.email,

      subject: `[From-A2B] Support needed from ${data.name} ${data.email} - ${data.subject}`,
      text: data.message,
    });
    return { message: 'Your message has been sent to support.' };
  }
);
