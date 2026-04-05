import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css.ts';

export const instructions = style({
  marginTop: vars.space.xl,
  padding: vars.space.lg,
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  alignSelf: 'center',
  maxWidth: '600px',
  width: '100%'
});

export const instructionsTitle = style({
  fontSize: '1.2rem',
  fontFamily: vars.font.heading,
  textTransform: 'uppercase',
  marginBottom: vars.space.md,
  color: vars.color.side.killer.primary,
  letterSpacing: '1px'
});

export const instructionsList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
  padding: 0,
  margin: 0,
  listStyle: 'none'
});

export const instructionsItem = style({
  display: 'flex',
  gap: vars.space.sm,
  fontSize: '0.9rem',
  lineHeight: '1.4',
  color: vars.color.textMuted,
  ':before': {
    content: "'•'",
    color: vars.color.side.killer.primary,
    fontWeight: 'bold'
  }
});
