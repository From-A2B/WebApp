/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}