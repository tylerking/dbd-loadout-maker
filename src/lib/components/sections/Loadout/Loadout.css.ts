import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css.ts';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.lg,
  padding: vars.space.xl,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.space.md
});

export const title = style({
  fontSize: '1.8rem',
  fontWeight: 'bold',
  letterSpacing: '1px',
  textTransform: 'uppercase'
});

export const actions = style({
  display: 'flex',
  gap: vars.space.md
});

export const icon = style({
  cursor: 'pointer',
  color: vars.color.textMuted,
  transition: 'color 0.2s, transform 0.2s',
  ':hover': {
    color: vars.color.primary,
    transform: 'scale(1.1)'
  }
});

export const grid = style({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: vars.space.xl,
  padding: vars.space.xl,
  minHeight: '200px'
});