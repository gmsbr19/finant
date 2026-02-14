import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('body', {
  margin: 0,
  padding: 0,
  fontFamily: vars.fonts.sans,
  backgroundColor: vars.colors.bgBase,
  color: vars.colors.textPrimary,
  WebkitFontSmoothing: 'antialiased',
  display: 'flex'
});

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0
});