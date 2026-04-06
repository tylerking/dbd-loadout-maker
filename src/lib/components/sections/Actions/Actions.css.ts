import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css.ts';

export const centralActions = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0.25rem 0.5rem',
  backgroundColor: vars.color.grayDeep,
  gap: '0.5rem',
  borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
  borderRight: '1px solid rgba(255, 255, 255, 0.05)',
  '@media': {
    'screen and (min-width: 768px)': {
      padding: '0 1rem',
    }
  }
});

export const actionIcon = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#fff',
  transition: 'all 0.2s ease',
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  ':hover': {
    color: vars.color.side.killer.primary,
    transform: 'scale(1.1)',
  },
  ':active': {
    transform: 'scale(0.9)',
  }
});
