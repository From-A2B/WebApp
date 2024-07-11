/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mantine-color-scheme="dark"]'],
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'mantine-primary-color-contrast':
          'var(--mantine-primary-color-contrast)',

        primary: {
          50: '#ecfef8',
          100: '#d8faf0',
          200: '#acf7df',
          300: '#7ef4ce',
          400: '#5cf1c0',
          500: '#4bf0b6',
          600: '#40efb1',
          700: '#34d59b',
          800: '#27bd89',
          900: '#0aa374',
        },

        'mantine-color-text': 'var(--mantine-color-text)',
        'mantine-color-bright': 'var(--mantine-color-bright)',
        'mantine-color-body': 'var(--mantine-color-body)',
        'mantine-color-error': 'var(--mantine-color-error)',
        'mantine-color-placeholder': 'var(--mantine-color-placeholder)',
        'mantine-color-anchor': 'var(--mantine-color-anchor)',

        'mantine-color-default': 'var(--mantine-color-default)',
        'mantine-color-default-hover': 'var(--mantine-color-default-hover)',
        'mantine-color-default-color': 'var(--mantine-color-default-color)',
        'mantine-color-default-border': 'var(--mantine-color-default-border)',

        'mantine-color-dimmed': 'var(--mantine-color-dimmed)',
        'mantine-color-black': 'var(--mantine-color-black)',

        'mantine-color-dark-text': 'var(--mantine-color-dark-text)',
        'mantine-color-dark-filled': 'var(--mantine-color-dark-filled)',
        'mantine-color-dark-filled-hover':
          'var(--mantine-color-dark-filled-hover)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
