import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  backgroundColor: '#0a0a0a',
  color: '#ffffff',
  fontFamily: 'Roboto, sans-serif',
  minHeight: '100vh'
});

globalStyle('*', {
  boxSizing: 'border-box',
  fontFamily: 'inherit'
});

globalStyle('button, input, select, textarea, option, optgroup', {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  color: 'inherit'
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  margin: 0,
  color: '#aa1a18',
  fontFamily: 'Roboto Condensed, sans-serif'
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none'
});

globalStyle('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0
});

globalStyle(':focus-visible', {
  outline: '2px solid rgba(255, 255, 255, 0.9)',
  outlineOffset: '3px',
});

globalStyle(':focus:not(:focus-visible)', {
  outline: 'none',
});

globalStyle('.skip-link', {
  position: 'absolute',
  top: '-100%',
  left: '1rem',
  zIndex: 9999,
  background: '#fff',
  color: '#000',
  padding: '0.5rem 1rem',
  fontWeight: 700,
  fontSize: '0.9rem',
  textDecoration: 'none',
  borderRadius: '0 0 4px 4px',
  transition: 'top 0.1s',
});

globalStyle('.skip-link:focus', {
  top: '0',
  outline: '3px solid #000',
  outlineOffset: '0',
});

globalStyle('.sr-only', {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
  whiteSpace: 'nowrap',
  border: '0',
});

export default {};
