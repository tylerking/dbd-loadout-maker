import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css.ts';

const jackInTheBox = keyframes({
  '0%': { opacity: 0, transform: 'scale(0.1) rotate(30deg)', transformOrigin: 'center bottom' },
  '50%': { opacity: 0.5, transform: 'rotate(-10deg)' },
  '70%': { transform: 'rotate(3deg)' },
  '100%': { opacity: 1, transform: 'scale(1)' }
});

export const root = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space.sm,
  width: '120px'
});

export const frame = style({
  width: '100px',
  height: '100px',
  border: '4px solid #333',
  background: '#111',
  transform: 'rotate(45deg)',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'transform 0.2s, border-color 0.2s',
  position: 'relative',
  ':hover': {
    transform: 'rotate(45deg) scale(1.05)',
    borderColor: vars.color.primary
  }
});

export const image = style({
  width: '141%', 
  height: '141%',
  transform: 'rotate(-45deg)',
  position: 'absolute',
  top: '-20%',
  left: '-20%',
  animation: `${jackInTheBox} 0.5s ease-out`
});

export const placeholder = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#333',
  fontSize: '2rem',
  transform: 'rotate(-45deg)'
});

export const common = style({ borderColor: vars.color.rarity.common });
export const uncommon = style({ borderColor: vars.color.rarity.uncommon });
export const rare = style({ borderColor: vars.color.rarity.rare });
export const veryRare = style({ borderColor: vars.color.rarity.veryRare });
export const ultraRare = style({ borderColor: vars.color.rarity.ultraRare });

export const popover = style({
  position: 'absolute',
  top: '0',
  left: '110%',
  zIndex: 1000,
  visibility: 'hidden',
  opacity: 0,
  transition: 'opacity 0.2s',
  selectors: {
    [`${frame}:hover + &`]: {
      visibility: 'visible',
      opacity: 1
    }
  }
});

export const controls = style({
  display: 'flex',
  gap: vars.space.sm,
  marginTop: vars.space.xs
});

export const icon = style({
  cursor: 'pointer',
  color: vars.color.textMuted,
  transition: 'color 0.2s',
  ':hover': {
    color: vars.color.primary
  }
});

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
  transform: 'rotate(-45deg)',
  zIndex: 10
});

export const searchModal = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  maxHeight: '80vh',
  background: '#222',
  border: '2px solid #444',
  borderRadius: '8px',
  zIndex: 2000,
  boxShadow: vars.shadow.lg,
  display: 'flex',
  flexDirection: 'column',
  animation: `${jackInTheBox} 0.3s ease-out`
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

export const closeIcon = style({
  cursor: 'pointer',
  color: vars.color.textMuted,
  ':hover': { color: vars.color.danger }
});

export const searchList = style({
  flex: 1,
  overflowY: 'auto',
  padding: vars.space.sm,
  display: 'flex',
  flexDirection: 'column',
  gap: '2px'
});

export const searchItem = style({
  display: 'flex',
  alignItems: 'center',
  padding: vars.space.sm,
  gap: vars.space.md,
  cursor: 'pointer',
  borderRadius: '4px',
  transition: 'background 0.2s',
  ':hover': {
    background: '#333'
  }
});

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
