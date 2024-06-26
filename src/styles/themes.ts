'use client';

import type { MantineColorsTuple } from '@mantine/core';
import { DEFAULT_THEME, createTheme, mergeMantineTheme } from '@mantine/core';
import '@mantine/core/styles.css';

const primaryColor: MantineColorsTuple = [
  '#ecfef8',
  '#d8faf0',
  '#acf7df',
  '#7ef4ce',
  '#5cf1c0',
  '#4bf0b6',
  '#40efb1',
  '#34d59b',
  '#27bd89',
  '#0aa374'
];

const themeOverride = createTheme({
  defaultRadius: 'md',
  fontFamily: 'Poppins, sans-serif',
  primaryColor: 'primaryColor',
  colors: {
    primaryColor,
    dark: [
      DEFAULT_THEME.colors.dark[0],
      DEFAULT_THEME.colors.dark[1],
      DEFAULT_THEME.colors.dark[2],
      DEFAULT_THEME.colors.dark[3],
      DEFAULT_THEME.colors.dark[4],
      DEFAULT_THEME.colors.dark[5],
      DEFAULT_THEME.colors.dark[6],
      DEFAULT_THEME.colors.dark[7],
      DEFAULT_THEME.colors.dark[8],
      DEFAULT_THEME.colors.dark[9],
    ],
  },
});

export const themes = mergeMantineTheme(DEFAULT_THEME, themeOverride);
