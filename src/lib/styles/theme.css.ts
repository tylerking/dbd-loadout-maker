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
    rarity: {
      common: tokens.colors.rarity.common,
      uncommon: tokens.colors.rarity.uncommon,
      rare: tokens.colors.rarity.rare,
      veryRare: tokens.colors.rarity.veryRare,
      ultraRare: tokens.colors.rarity.ultraRare
    }
  },
  space: tokens.spacing,
  font: tokens.fonts,
  shadow: tokens.shadows
});

export { themeClass, vars };
export default themeClass;
