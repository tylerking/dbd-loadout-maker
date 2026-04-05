import { createTheme } from '@vanilla-extract/css';
import tokens from './tokens';

const [themeClass, vars] = createTheme({
  color: {
    primary: tokens.colors.primary,
    secondary: tokens.colors.secondary,
    danger: tokens.colors.danger,
    success: tokens.colors.success,
    background: tokens.colors.background,
    surface: tokens.colors.surface,
    text: tokens.colors.text,
    textMuted: tokens.colors.textMuted,
    grayDark: tokens.colors.grayDark,
    grayDeep: tokens.colors.grayDeep,
    side: {
      killer: {
        primary: tokens.colors.side.killer.primary,
        secondary: tokens.colors.side.killer.secondary,
        dark: tokens.colors.side.killer.dark
      },
      survivor: {
        primary: tokens.colors.side.survivor.primary,
        secondary: tokens.colors.side.survivor.secondary,
        dark: tokens.colors.side.survivor.dark
      }
    }
  },
  space: tokens.spacing,
  font: {
    heading: tokens.fonts.heading,
    body: tokens.fonts.body
  },
  shadow: tokens.shadows
});

export { themeClass, vars };
export default themeClass;
