import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css.ts';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  backgroundColor: vars.color.background,
  color: vars.color.text,
  fontFamily: vars.font.base,
  minHeight: '100vh'
});

globalStyle('*', {
  boxSizing: 'border-box'
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  margin: 0,
  color: vars.color.primary
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
