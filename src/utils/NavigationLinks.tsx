import { EmailIcon } from '@/components/icons/email.icon';
import { MoneyIcon } from '@/components/icons/money.icon';
import { UserIcon } from '@/components/icons/user.icon';
import { WarnIcon } from '@/components/icons/warn.icon';
import type { NavigationLinks } from '@/types/NavigationLink.schema';
import type { NavigationLinksWithGroup } from '@/types/NavigationLinkWithGroup.schema';
import {
  IconGavel,
  IconLayoutDashboard,
  IconMail,
  IconUser,
  IconUsers,
} from '@tabler/icons-react';

export const LINKS = {
  Landing: {
    Landing: {
      label: 'Home',
      href: '/',
      auth: false,
    },
  },
  Auth: {
    SignIn: {
      label: 'Sign In',
      href: '/auth/signin',
      auth: false,
    },
    SignUp: {
      label: 'Sign Up',
      href: '/auth/signup',
      auth: false,
    },
  },
  Account: {
    MyAccount: {
      label: 'My Account',
      href: '/account',
      auth: true,
      icon: <UserIcon colorize="var(--mantine-color-text)" />,
    },
    Delete: {
      label: 'Delete Profile',
      href: '/account/delete',
      auth: true,
      icon: <WarnIcon colorize="var(--mantine-color-text)" />,
    },
    Billing: {
      label: 'Billing',
      href: '/account/billing',
      auth: true,
      icon: <MoneyIcon colorize="var(--mantine-color-text)" />,
    },
    Settings: {
      label: 'Email Settings',
      href: '/account/email',
      auth: true,
      icon: <EmailIcon colorize="var(--mantine-color-text)" />,
    },
    VerifyEmail: {
      label: 'Verify Email',
      href: '/account/verify-email',
      auth: true,
      icon: <IconMail />,
    },
    Travel: {
      label: 'My travels',
      href: '/account/travels',
      auth: true,
      icon: <IconMail />,
    },
  },
  Dashboard: {
    Dashboard: {
      label: 'Dashboard',
      href: '/dashboard',
      auth: true,
      icon: <IconLayoutDashboard />,
    },
    Users: {
      label: 'Users',
      href: '/users',
      auth: true,
      icon: <IconUser />,
    },
    Trips: {
      label: 'Trips',
      href: '/dashboard/trips',
      auth: true,
      icon: <IconUsers />,
    },
  },
  Legal: {
    Privacy: {
      label: 'Privacy Policy',
      href: '/legal/privacy',
      auth: false,
    },
    Terms: {
      label: 'Terms of Service',
      href: '/legal/terms',
      auth: false,
      icon: <IconGavel />,
    },
  },
  Payment: {
    Success: {
      label: 'Payment Success',
      href: '/payment/success',
      auth: true,
    },
    Cancel: {
      label: 'Payment Cancel',
      href: '/payment/cancel',
      auth: true,
    },
  },
  Informations: {
    Testimonials: {
      label: 'Testimonials',
      href: '/testimonials',
      auth: false,
    },
  },
  Travels: {
    Create: {
      label: 'Create travel',
      href: '/travels/create',
      auth: true,
    },
  },
  Support: {
    Contact: {
      label: 'Contact',
      href: '/support',
      auth: false,
    },
    FAQ: {
      label: 'FAQ',
      href: '/faq',
      auth: false,
    },
  },
  Informations: {
    Testimonials: {
      label: 'Testimonials',
      href: '/testimonials',
      auth: false,
    },
  },
  Travels: {
    Create: {
      label: 'Create travel',
      href: '/travels/create',
      auth: true,
    },
  },
  Support: {
    Contact: {
      label: 'Contact',
      href: '/support',
      auth: false,
    },
    FAQ: {
      label: 'FAQ',
      href: '/faq',
      auth: false,
    },
  },
};


export const HEADER_LINKS: NavigationLinks = [];

export const ACCOUNT_LINKS: NavigationLinks = [
  LINKS.Account.MyAccount,
  LINKS.Account.Settings,
  LINKS.Account.Billing,
  LINKS.Account.Delete,
];

export const DASHBOARD_LINKS: NavigationLinks = [
  LINKS.Dashboard.Dashboard,
  LINKS.Dashboard.Users,
];

export const ACCOUNT_NAVIGATION_MOBILE_LINKS: NavigationLinksWithGroup = [
  {
    title: 'Personal Information',
    links: [
      LINKS.Account.MyAccount,
      LINKS.Account.Delete,
      LINKS.Account.Billing,
    ],
  },
  {
    title: 'Settings',
    links: [LINKS.Account.Settings],
  },
];

export const DASHBOARD_NAVIGATION_LINKS: NavigationLinksWithGroup = [
  {
    title: 'Other',
    links: [LINKS.Dashboard.Users, LINKS.Dashboard.Trips],
  },
];

export const FOOTER_LINKS: NavigationLinksWithGroup = [
  {
    title: 'Account',
    links: [LINKS.Account.MyAccount, LINKS.Account.Travel],
  },
  {
    title: 'Informations',
    links: [LINKS.Informations.Testimonials, LINKS.Travels.Create],
  },
  {
    title: 'Support',
    links: [LINKS.Support.Contact, LINKS.Support.FAQ],
  },
];
