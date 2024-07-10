import type { NavigationLinks } from '@/types/NavigationLink.schema';
import type { NavigationLinksWithGroup } from '@/types/NavigationLinkWithGroup.schema';
import {
  IconAlertSquareRounded,
  IconCoinEuro,
  IconLayoutDashboard,
  IconMail,
  IconUser,
  IconUsers,
  IconRestore,
  IconRoute
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
    Profile: {
      label: 'Profile',
      href: '/account',
      auth: true,
      icon: <IconUser />,
    },
    Delete: {
      label: 'Delete Profile',
      href: '/account/delete',
      auth: true,
      icon: <IconAlertSquareRounded />,
    },
    Billing: {
      label: 'Billing',
      href: '/account/billing',
      auth: true,
      icon: <IconCoinEuro />,
    },
    Settings: {
      label: 'Settings',
      href: '/account/email',
      auth: true,
      icon: <IconMail />,
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
};

export const HEADER_LINKS: NavigationLinks = [];

export const ACCOUNT_LINKS: NavigationLinks = [
  LINKS.Account.Profile,
  LINKS.Account.Delete,
  LINKS.Account.Billing,
  LINKS.Account.Settings,
];

export const DASHBOARD_LINKS: NavigationLinks = [
  LINKS.Dashboard.Dashboard,
  LINKS.Dashboard.Users,
];

export const ACCOUNT_NAVIGATION_MOBILE_LINKS: NavigationLinksWithGroup = [
  {
    title: 'Personal Information',
    links: [LINKS.Account.Profile, LINKS.Account.Delete, LINKS.Account.Billing],
  },
  {
    title: 'Settings',
    links: [LINKS.Account.Settings],
  },
];

export const DASHBOARD_NAVIGATION_LINKS: NavigationLinksWithGroup = [
  {
    title: 'Dashboard',
    links: [LINKS.Account.Travel, LINKS.Dashboard.Users, LINKS.Account.ResetPassword, LINKS.Account.Profile],
  },
];

export const FOOTER_LINKS: NavigationLinksWithGroup = [
  {
    title: 'Account',
    links: [LINKS.Account.Profile, LINKS.Account.Travel],
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
