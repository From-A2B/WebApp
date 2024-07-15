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
  IconRestore,
  IconRoute,
  IconChartDots3
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
      description: 'See my profile',
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
      href: '/dashboard/travels',
      auth: true,
      icon: <IconRoute />,
    },
    ResetPassword: {
      label: 'Reset Password',
      href: '/account/reset-password',
      auth: false,
      icon: <IconRestore />,
    }
  },
  Dashboard: {
    Dashboard: {
      label: 'Dashboard',
      href: '/dashboard',
      auth: true,
      description: "Manage your dashboard",
      icon: <IconLayoutDashboard />,
    },
    Trips: {
      label: 'Trips',
      href: '/dashboard/trips',
      auth: true,
      icon: <IconUsers />,
      description: "Manage your trips",
    },
    TripDetails: {
      label: 'Trips',
      href: '/dashboard/trips/{id}',
      auth: true,
      icon: <IconUsers />,
    },
    Stats: {
      label: 'Stats',
      href: '/dashboard/stats',
      auth: true,
      description: "See your stats",
      icon: <IconChartDots3 />,
    }
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
    Feedback: {
      label: 'Feedback',
      href: '/feedback',
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
  TripDetail: {
    Contact: {
      label: 'Contact',
      href: '/support',
      auth: false,
    },
  }
};

export const HEADER_LINKS: NavigationLinks = [];

export const ACCOUNT_LINKS: NavigationLinks = [
  LINKS.Account.MyAccount,
  LINKS.Account.Settings,
  LINKS.Account.Billing,
  LINKS.Account.Delete,
];

export const DASHBOARD_LINKS: NavigationLinks = [
  LINKS.Dashboard.Dashboard
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
    title: 'Dashboard',
    links: [LINKS.Dashboard.Trips, LINKS.Dashboard.Stats, LINKS.Account.MyAccount],
  },
];

export const FOOTER_LINKS: NavigationLinksWithGroup = [
  {
    title: 'Account',
    links: [LINKS.Account.MyAccount, LINKS.Account.Travel],
  },
  {
    title: 'Informations',
    links: [LINKS.Informations.Feedback, LINKS.Travels.Create],
  },
  {
    title: 'Support',
    links: [LINKS.Support.Contact, LINKS.Support.FAQ],
  },
];
