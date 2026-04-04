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
  gap: vars.space.sm,
  flex: '1 0 120px',
  minWidth: '120px',
  maxWidth: '180px',
});

export const frame = style([baseButton, {
  width: '100px',
  height: '100px',
  transform: 'rotate(45deg)',
  border: '0.5px solid transparent',
  overflow: 'visible',
  transition: 'transform 0.2s, border-color 0.2s',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(0,0,0,0.6)',
  ':hover': {
    transform: 'rotate(45deg) scale(1.05)',
    borderColor: vars.color.primary
  },
  ':focus': {
    outline: `2px solid ${vars.color.primary}`,
    outlineOffset: '8px'
  },
  '::before': {
    content: "''",
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px',
    background: `
      linear-gradient(white, white) 0 0 / 15px 2px,
      linear-gradient(white, white) 0 0 / 2px 15px,
      linear-gradient(white, white) 100% 0 / 15px 2px,
      linear-gradient(white, white) 100% 0 / 2px 15px,
      linear-gradient(white, white) 100% 100% / 15px 2px,
      linear-gradient(white, white) 100% 100% / 2px 15px,
      linear-gradient(white, white) 0 100% / 15px 2px,
      linear-gradient(white, white) 0 100% / 2px 15px
    `,
    backgroundRepeat: 'no-repeat',
    zIndex: 2,
    pointerEvents: 'none'
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
  color: vars.color.textMuted,
  fontSize: '2rem',
  transform: 'rotate(-45deg)',
  zIndex: 1
});

export const popover = style({
  position: 'absolute',
  top: '0',
  left: '110%',
  width: '250px',
  zIndex: 1000,
  '@media': {
    'screen and (max-width: 768px)': {
      left: '50%',
      transform: 'translateX(-50%)',
      top: '110%',
    }
  }
});

export const controls = style({
  display: 'flex',
  gap: vars.space.sm,
  marginTop: vars.space.xs
});

export const icon = style([baseButton, {
  color: vars.color.text,
  fontSize: '20px',
  transition: 'color 0.2s',
  ':hover': {
    color: vars.color.primary
  },
  ':focus': {
    outline: `1px solid ${vars.color.primary}`
  }
}]);

export const lockedIcon = style({
  color: vars.color.secondary
});

export const filterSelect = style({
  background: '#222',
  color: vars.color.text,
  border: '1px solid #444',
  borderRadius: '4px',
  padding: '2px 4px',
  fontSize: '0.7rem',
  width: '100%',
  cursor: 'pointer',
  ':focus': {
    outline: 'none',
    borderColor: vars.color.primary
  }
});

export const lockOverlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,0.4)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: vars.color.secondary,
  fontSize: '1.5rem',
  zIndex: 10,
  pointerEvents: 'none'
});

export const searchModal = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '80vh',
  background: '#222',
  border: '2px solid #444',
  borderRadius: '8px',
  zIndex: 2000,
  boxShadow: vars.shadow.lg,
  display: 'flex',
  flexDirection: 'column',
  animation: `${jackInTheBox} 0.3s ease-out`,
  '@media': {
    'screen and (min-width: 768px)': {
      width: '400px',
    }
  }
});

export const searchHeader = style({
  padding: vars.space.md,
  borderBottom: '1px solid #333',
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md
});

export const searchInput = style({
  flex: 1,
  background: '#111',
  border: '1px solid #444',
  color: vars.color.text,
  padding: vars.space.sm,
  borderRadius: '4px',
  ':focus': {
    outline: 'none',
    borderColor: vars.color.primary
  }
});

export const closeIcon = style([baseButton, {
  color: vars.color.textMuted,
  ':hover': { color: vars.color.danger }
}]);

export const searchList = style({
  flex: 1,
  overflowY: 'auto',
  padding: vars.space.sm,
  display: 'flex',
  flexDirection: 'column',
  gap: '2px'
});

export const searchItem = style([baseButton, {
  display: 'flex',
  alignItems: 'center',
  padding: vars.space.sm,
  gap: vars.space.md,
  borderRadius: '4px',
  transition: 'background 0.2s',
  width: '100%',
  ':hover': {
    background: '#333'
  },
  ':focus': {
    background: '#333',
    outline: 'none'
  }
}]);

export const searchItemImage = style({
  width: '40px',
  height: '40px',
  border: '1px solid #444'
});

export const searchItemInfo = style({
  display: 'flex',
  flexDirection: 'column'
});

export const searchItemName = style({
  fontSize: '0.9rem',
  fontWeight: 'bold'
});

export const searchItemCharacter = style({
  fontSize: '0.75rem',
  color: vars.color.textMuted
});

export const noResults = style({
  padding: vars.space.lg,
  textAlign: 'center',
  color: vars.color.textMuted
});

export const disabledIcon = style({
  opacity: 0.5,
  cursor: 'not-allowed',
  ':hover': { color: vars.color.textMuted }
});