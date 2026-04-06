import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css.ts';

export const footer = style({
  padding: '3rem 2rem',
  textAlign: 'center',
  color: vars.color.textMuted
});

export const footerText = style({
  marginBottom: '0.5rem'
});

export const footerSubText = style({
  fontSize: '0.8rem'
});
