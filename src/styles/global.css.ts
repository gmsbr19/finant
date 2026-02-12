import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('body', {
  margin: 0,
  padding: 0,
  fontFamily: vars.fonts.body,
  backgroundColor: vars.colors.background,
  color: vars.colors.text,
  WebkitFontSmoothing: 'antialiased',
});

globalStyle('*', {
  boxSizing: 'border-box',
});