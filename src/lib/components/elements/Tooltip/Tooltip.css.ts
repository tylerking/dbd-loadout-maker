import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css.ts';

const fadeIn = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, 5px)' },
  '100%': { opacity: 1, transform: 'translate(-50%, 0)' }
});

export const container = style({
  position: 'relative',
  display: 'inline-block',
});

export const tooltip = style({
  position: 'absolute',
  bottom: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  marginBottom: '10px',
  padding: '6px 12px',
  backgroundColor: '#000',
  color: '#fff',
  fontSize: '0.75rem',
  fontFamily: vars.font.heading,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  whiteSpace: 'nowrap',
  boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
  pointerEvents: 'none',
  zIndex: 1000,
  animation: `${fadeIn} 0.2s ease-out`,
  border: 'none',
  ':after': {
    content: "''",
    position: 'absolute',
    top: '100%',
    left: '50%',
    marginLeft: '-5px',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: '#000 transparent transparent transparent'
  }
});
