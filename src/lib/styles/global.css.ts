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

export default {};
