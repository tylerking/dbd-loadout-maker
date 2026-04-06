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
  color: 'inherit',
  textAlign: 'left'
});

export const root = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  padding: '3rem 0',
  borderRight: '1px solid rgba(255, 255, 255, 0.05)',
  overflow: 'visible',
  ':last-child': {
    borderRight: 'none'
  }
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
  marginBottom: '2.5rem',
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
  zIndex: 1,
  selectors: {
    '&[data-missing="true"]': {
      opacity: 0.8
    }
  }
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
  top: '140px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1000,
  pointerEvents: 'auto',
  width: 'max-content',
  maxWidth: '300px'
});

export const controls = style({
  display: 'flex',
  gap: '1rem',
  marginBottom: '0.5rem'
});

export const icon = style([baseButton, {
  color: '#fff',
  fontSize: '20px',
  transition: 'all 0.2s ease',
  padding: '8px',
  borderRadius: '4px',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    backgroundColor: 'rgba(255,255,255,0.1)'
  }
}]);

export const lockedIcon = style({
  color: '#fff',
  backgroundColor: 'rgba(255,255,255,0.15)'
});

export const selectWrapper = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  width: 'auto',
  margin: '0 auto'
});

export const filterSelect = style({
  background: 'transparent',
  color: '#fff',
  border: 'none',
  padding: '8px 32px 8px 12px',
  fontSize: '0.8rem',
  fontFamily: 'inherit',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  appearance: 'none',
  textAlign: 'center',
  width: 'auto',
  minWidth: '160px',
  zIndex: 2,
  position: 'relative',
  ':hover': {
    opacity: 0.8
  },
  ':focus': {
    outline: 'none',
  }
});

export const selectCaret = style({
  position: 'absolute',
  right: '8px',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  color: '#fff',
  opacity: 0.6,
  zIndex: 1
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
  color: '#fff',
  zIndex: 10,
  pointerEvents: 'none',
  transform: 'rotate(-45deg)'
});

export const inlineSearch = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: vars.color.grayDeep,
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden'
});

export const searchHeader = style({
  padding: '1.5rem 1rem 0.5rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  backgroundColor: 'transparent',
  borderBottom: 'none',
  flexShrink: 0
});

export const searchInput = style({
  flex: 1,
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
  color: vars.color.text,
  padding: '0.5rem 0',
  fontSize: '0.9rem',
  fontFamily: 'inherit',
  borderRadius: 0,
  ':focus': {
    outline: 'none',
    borderBottomColor: '#fff'
  }
});

export const closeIcon = style([baseButton, {
  color: '#555',
  transition: 'color 0.2s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': { color: '#fff' }
}]);

export const searchList = style({
  flex: 1,
  overflowY: 'auto',
  padding: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  '::-webkit-scrollbar': {
    width: '4px'
  },
  '::-webkit-scrollbar-track': {
    background: 'transparent'
  },
  '::-webkit-scrollbar-thumb': {
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '2px'
  }
});

export const searchItem = style([baseButton, {
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem 0.75rem',
  gap: '0.75rem',
  transition: 'all 0.2s ease',
  width: '100%',
  ':hover': {
    background: 'rgba(255,255,255,0.05)',
  },
  ':focus': {
    background: 'rgba(255,255,255,0.05)',
    outline: 'none',
  }
}]);

export const searchItemImage = style({
  width: '32px',
  height: '32px',
  backgroundColor: '#000',
  objectFit: 'contain',
  selectors: {
    '&[data-missing="true"]': {
      opacity: 0.8
    }
  }
});

export const searchItemInfo = style({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0
});

export const searchItemName = style({
  fontSize: '0.85rem',
  fontWeight: 700,
  fontFamily: vars.font.heading,
  textTransform: 'uppercase',
  letterSpacing: '0.02em',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
});

export const searchItemCharacter = style({
  fontSize: '0.7rem',
  color: vars.color.textMuted,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
});

export const noResults = style({
  padding: '2rem',
  textAlign: 'center',
  color: '#444',
  fontSize: '0.8rem',
  textTransform: 'uppercase',
  letterSpacing: '0.1em'
});

export const disabledIcon = style({
  opacity: 0.3,
  cursor: 'not-allowed',
  filter: 'grayscale(100%)',
  ':hover': { 
    color: '#fff',
    backgroundColor: 'transparent'
  }
});
