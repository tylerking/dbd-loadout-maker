import { style } from '@vanilla-extract/css';
import { vars } from './theme.css.ts';

export const app = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.color.background,
  color: vars.color.text,
  fontFamily: vars.font.body
});

export const main = style({
  padding: '1rem 0.5rem',
  maxWidth: '1300px',
  margin: '0 auto',
  width: '100%',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  '@media': {
    'screen and (min-width: 768px)': {
      padding: '2rem 2rem',
    }
  }
});

export const loadoutContainer = style({
  overflow: 'visible',
  boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
});

export const killerBg = style({
  backgroundColor: vars.color.side.killer.dark,
});

export const survivorBg = style({
  backgroundColor: vars.color.side.survivor.dark,
});

export const tabNav = style({
  display: 'flex',
  backgroundColor: '#000',
  alignItems: 'stretch',
  flexDirection: 'row'
});

const baseButton = style({
  background: 'none',
  border: 'none',
  padding: '1rem',
  margin: 0,
  cursor: 'pointer',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  color: 'rgba(255, 255, 255, 0.4)',
  '@media': {
    'screen and (min-width: 768px)': {
      padding: '1.5rem 3rem',
    }
  }
});

export const toggleButton = style([baseButton, {
  opacity: 1,
}]);

export const killerTab = style({
  justifyContent: 'center',
  backgroundColor: vars.color.grayDark,
  '@media': {
    'screen and (min-width: 768px)': {
      justifyContent: 'flex-start',
      gap: '3rem',
    }
  }
});

export const survivorTab = style({
  justifyContent: 'center',
  backgroundColor: vars.color.grayDark,
  '@media': {
    'screen and (min-width: 768px)': {
      justifyContent: 'flex-end',
      gap: '3rem',
    }
  }
});

export const activeToggle = style({
  color: '#fff',
});

export const killerActive = style({
  background: vars.color.side.killer.secondary,
  '@media': {
    'screen and (min-width: 768px)': {
      background: `linear-gradient(115deg, ${vars.color.side.killer.secondary} 150px, ${vars.color.side.killer.primary} 151px)`,
    }
  }
});

export const survivorActive = style({
  background: vars.color.side.survivor.secondary,
  '@media': {
    'screen and (min-width: 768px)': {
      background: `linear-gradient(-115deg, ${vars.color.side.survivor.secondary} 150px, ${vars.color.side.survivor.primary} 151px)`,
    }
  }
});

export const toggleImage = style({
  width: '40px',
  height: 'auto',
  zIndex: 1,
  filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.5))',
  selectors: {
    [`${toggleButton}:not(${activeToggle}) &`]: {
      opacity: 0.5,
      filter: 'grayscale(100%)'
    }
  },
  '@media': {
    'screen and (min-width: 768px)': {
      width: '70px',
    }
  }
});

export const tabLabel = style({
  display: 'none',
  fontFamily: vars.font.heading,
  fontSize: '1.8rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '2px',
  zIndex: 1,
  textShadow: '0 4px 8px rgba(0,0,0,0.8)',
  position: 'relative',
  paddingBottom: '8px',
  ':after': {
    content: "''",
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '3px',
    backgroundColor: '#fff',
    transform: 'scaleX(0) skewX(-30deg)',
    transition: 'transform 0.2s ease',
    transformOrigin: 'bottom center'
  },
  selectors: {
    [`${toggleButton}:hover &:after, ${activeToggle} &:after`]: {
      transform: 'scaleX(1) skewX(-30deg)'
    },
    [`${toggleButton}:hover &, ${activeToggle} &`]: {
      color: '#fff'
    }
  },
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'block'
    }
  }
});

export const tabContent = style({
  position: 'relative',
  zIndex: 2,
  overflow: 'visible'
});

export const sideIconContainer = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
  zIndex: 1
});

export const sideIcon = style({
  position: 'absolute',
  top: '30%',
  width: '240px',
  height: 'auto',
  opacity: 0.04,
  filter: 'brightness(0) invert(1)',
  '@media': {
    'screen and (min-width: 768px)': {
      width: '240px',
    }
  }
});

export const sideIconLeft = style({
  left: '-6%',
});

export const sideIconRight = style({
  right: '-6%',
});
