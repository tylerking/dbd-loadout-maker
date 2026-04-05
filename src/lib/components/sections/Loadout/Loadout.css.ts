import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css.ts';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
  padding: 0,
});

export const header = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0.5rem 0',
  gap: '1rem'
});

export const filterContainer = style({
  display: 'flex',
  justifyContent: 'center'
});

export const globalFilterSelect = style({
  background: '#000',
  color: '#fff',
  padding: '6px 12px',
  fontSize: '0.8rem',
  fontFamily: vars.font.heading,
  width: '180px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  textAlign: 'center',
  appearance: 'none',
  border: 'none',
  ':hover': {
    backgroundColor: '#111'
  },
  ':focus': {
    outline: 'none',
  }
});

export const actions = style({
  display: 'flex',
  gap: '0.75rem',
  padding: '4px 12px',
  backgroundColor: '#000',
  boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
});

export const icon = style({
  cursor: 'pointer',
  color: '#fff',
  transition: 'all 0.2s ease',
  padding: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    transform: 'scale(1.1)',
  },
  ':active': {
    transform: 'scale(0.95)',
  }
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  justifyItems: 'center',
  alignItems: 'start',
  gap: '2rem',
  padding: '2rem 1rem',
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
  '@media': {
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: vars.space.xl,
    }
  }
});
