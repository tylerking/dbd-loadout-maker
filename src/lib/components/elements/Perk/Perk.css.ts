import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css.ts';

const jackInTheBox = keyframes({
  '0%': { opacity: 0, transform: 'scale(0.1) rotate(30deg)', transformOrigin: 'center bottom' },
  '50%': { opacity: 0.5, transform: 'rotate(-10deg)' },
  '70%': { transform: 'rotate(3deg)' },
  '100%': { opacity: 1, transform: 'scale(1)' }
});

const baseButton = style({
  background: 'none',
  border: 'none',
  padding: 0,
  margin: 0,
  cursor: 'pointer',
  fontFamily: 'inherit',
  color: 'inherit',
  textAlign: 'left'
});

export const root = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',
  width: '100%',
});

export const frame = style([baseButton, {
  width: '120px',
  height: '120px',
  transform: 'rotate(45deg)',
  overflow: 'visible',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
  backgroundImage: `
    linear-gradient(to right, #fff 12px, transparent 12px),
    linear-gradient(to bottom, #fff 12px, transparent 12px),
    linear-gradient(to left, #fff 12px, transparent 12px),
    linear-gradient(to bottom, #fff 12px, transparent 12px),
    linear-gradient(to left, #fff 12px, transparent 12px),
    linear-gradient(to top, #fff 12px, transparent 12px),
    linear-gradient(to right, #fff 12px, transparent 12px),
    linear-gradient(to top, #fff 12px, transparent 12px)
  `,
  backgroundPosition: '0 0, 0 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%',
  backgroundSize: '100% 2px, 2px 100%, 100% 2px, 2px 100%, 100% 2px, 2px 100%, 100% 2px, 2px 100%',
  backgroundRepeat: 'no-repeat',
  border: 'none',
  ':hover': {
    transform: 'rotate(45deg) scale(1.1)',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  ':focus': {
    outline: 'none',
  }
}]);

export const image = style({
  width: '141%', 
  height: '141%',
  objectFit: 'cover',
  transform: 'rotate(-45deg)',
  animation: `${jackInTheBox} 0.5s ease-out`,
  zIndex: 1
});

export const placeholder = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'rotate(-45deg)',
  zIndex: 1
});

export const popover = style({
  position: 'absolute',
  top: '-10px',
  left: '125%',
  zIndex: 1000,
  pointerEvents: 'none',
  '@media': {
    'screen and (max-width: 1024px)': {
      left: 'auto',
      right: '125%',
    },
    'screen and (max-width: 768px)': {
      left: '50%',
      right: 'auto',
      transform: 'translateX(-50%)',
      top: '125%',
    }
  }
});

export const controls = style({
  display: 'flex',
  gap: '1rem',
  marginTop: '0.5rem'
});

export const icon = style([baseButton, {
  color: '#666',
  fontSize: '20px',
  transition: 'all 0.2s ease',
  padding: '6px',
  backgroundColor: 'rgba(255,255,255,0.03)',
  ':hover': {
    color: vars.color.text,
    backgroundColor: 'rgba(255,255,255,0.1)'
  }
}]);

export const lockedIcon = style({
  color: vars.color.side.killer.primary,
  backgroundColor: 'rgba(170, 26, 24, 0.1)'
});

export const filterSelect = style({
  background: '#111',
  color: '#888',
  border: 'none',
  padding: '8px 12px',
  fontSize: '0.8rem',
  fontFamily: vars.font.heading,
  width: '160px',
  margin: '0 auto',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  appearance: 'none',
  textAlign: 'center',
  ':hover': {
    color: '#aaa',
    backgroundColor: '#181818'
  },
  ':focus': {
    outline: 'none',
    color: vars.color.text
  }
});

export const lockOverlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: vars.color.side.killer.primary,
  zIndex: 10,
  pointerEvents: 'none',
  transform: 'rotate(-45deg)'
});

export const searchModal = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '80vh',
  background: '#121212',
  boxShadow: '0 20px 50px rgba(0,0,0,0.9)',
  zIndex: 2000,
  display: 'flex',
  flexDirection: 'column',
  animation: `${jackInTheBox} 0.3s ease-out`,
  fontFamily: vars.font.body,
  border: 'none'
});

export const searchHeader = style({
  padding: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  backgroundColor: '#181818'
});

export const searchInput = style({
  flex: 1,
  background: '#0a0a0a',
  border: 'none',
  color: vars.color.text,
  padding: '0.8rem 1rem',
  fontSize: '1rem',
  fontFamily: vars.font.body,
  ':focus': {
    outline: 'none'
  }
});

export const closeIcon = style([baseButton, {
  color: '#555',
  transition: 'color 0.2s',
  ':hover': { color: vars.color.side.killer.primary }
}]);

export const searchList = style({
  flex: 1,
  overflowY: 'auto',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  backgroundColor: '#121212'
});

export const searchItem = style([baseButton, {
  display: 'flex',
  alignItems: 'center',
  padding: '0.75rem 1rem',
  gap: '1rem',
  transition: 'all 0.2s ease',
  width: '100%',
  ':hover': {
    background: '#1a1a1a',
  },
  ':focus': {
    background: '#1a1a1a',
    outline: 'none',
  }
}]);

export const searchItemImage = style({
  width: '50px',
  height: '50px',
  backgroundColor: '#000'
});

export const searchItemInfo = style({
  display: 'flex',
  flexDirection: 'column'
});

export const searchItemName = style({
  fontSize: '1rem',
  fontWeight: 700,
  fontFamily: vars.font.heading,
  textTransform: 'uppercase',
  letterSpacing: '0.02em'
});

export const searchItemCharacter = style({
  fontSize: '0.8rem',
  color: vars.color.textMuted
});

export const noResults = style({
  padding: '3rem',
  textAlign: 'center',
  color: '#444',
  fontFamily: vars.font.heading,
  textTransform: 'uppercase',
  letterSpacing: '0.1em'
});

export const disabledIcon = style({
  opacity: 0.3,
  cursor: 'not-allowed',
  filter: 'grayscale(100%)',
  ':hover': { 
    color: '#666',
    backgroundColor: 'transparent'
  }
});
