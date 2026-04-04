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
    side: {
      killer: tokens.colors.side.killer,
      survivor: tokens.colors.side.survivor
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
