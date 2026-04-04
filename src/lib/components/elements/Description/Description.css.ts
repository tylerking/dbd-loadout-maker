import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css.ts';

export const root = style({
  width: '300px',
  backgroundColor: vars.color.surface,
  borderRadius: vars.space.sm,
  overflow: 'hidden',
  boxShadow: vars.shadow.md,
  color: vars.color.text,
  zIndex: 100
});

export const header = style({
  padding: vars.space.sm,
  borderBottom: `2px solid ${vars.color.background}`
});

export const title = style({
  fontSize: '1rem',
  fontWeight: 'bold',
  color: vars.color.text,
  marginBottom: vars.space.xs
});

export const subtitle = style({
  fontSize: '0.8rem',
  color: vars.color.textMuted
});

export const content = style({
  padding: vars.space.sm,
  fontSize: '0.9rem',
  lineHeight: '1.4'
});