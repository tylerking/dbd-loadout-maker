import { style } from '@vanilla-extract/css';
import { vars } from './theme.css.ts';

export const app = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
});

export const nav = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  borderBottom: `1px solid ${vars.color.surface}`
});

export const navTitle = style({
  margin: 0,
  fontSize: '1.5rem',
  color: vars.color.primary,
  letterSpacing: '2px',
  fontFamily: vars.font.heading,
  fontWeight: 700
});

export const navLink = style({
  color: vars.color.text
});

export const main = style({
  padding: '2rem',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  width: '100%',
  flex: 1
});

export const toggleContainer = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginBottom: '2rem'
});

const baseButton = style({
  background: 'none',
  border: 'none',
  padding: 0,
  margin: 0,
  cursor: 'pointer',
});

export const toggleButton = style([baseButton, {
  opacity: 0.5,
  transition: 'opacity 0.3s, transform 0.2s',
  ':hover': {
    opacity: 0.8,
    transform: 'scale(1.05)'
  },
  ':focus': {
    outline: `2px solid ${vars.color.primary}`,
    outlineOffset: '4px'
  }
}]);

export const activeToggle = style({
  opacity: 1,
  ':hover': {
    opacity: 1
  }
});

export const toggleImage = style({
  width: '80px',
  height: 'auto',
  filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.2))'
});

export const footer = style({
  padding: '3rem 2rem',
  textAlign: 'center',
  borderTop: `1px solid ${vars.color.surface}`,
  marginTop: '4rem',
  color: vars.color.textMuted
});

export const footerText = style({
  marginBottom: '0.5rem'
});

export const footerSubText = style({
  fontSize: '0.8rem'
});