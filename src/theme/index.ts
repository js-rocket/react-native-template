// Theme colors generated from: https://coolors.co/ba1200-031927-9dd1f1-508aa8-c8e0f4

export type ThemeType = typeof lightTheme // This is the type definition for my theme object.

const commonProperties = {
  fontSizes: {
    small: 8,
    medium: 12,
    large: 24,
    extralarge: 32,
  },
}

export const lightTheme = {
  isDark: false,
  colors: {
    primary: '#9dd1f1',
    secondary: '#031927',
    tertiary: '#508aa8',
    accent: '#ba1200',
    default: 'white',
    inverse: 'black',
  },
  ...commonProperties,
}
export const darkTheme: ThemeType = {
  isDark: true,
  colors: {
    primary: '#031927',
    secondary: '#9dd1f1',
    tertiary: '#508aa8',
    accent: '#ba1200',
    default: 'black',
    inverse: 'white',
  },
  ...commonProperties,
}

const appTheme = lightTheme // set the light theme as the default.
export default appTheme

/*
const commonProperties = {
  fontSizes: {
    small: 8,
    medium: 12,
    large: 24,
    extralarge: 32,
  },
}

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#9dd1f1',
    secondary: '#031927',
    tertiary: '#508aa8',
    accent: '#ba1200',
    default: 'white',
    inverse: 'black',
  },
  ...commonProperties,
}

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#031927',
    secondary: '#9dd1f1',
    tertiary: '#508aa8',
    accent: '#ba1200',
    default: 'black',
    inverse: 'white',
  },
  ...commonProperties,
}
*/
