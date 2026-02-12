import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const container = style({
  padding: vars.space.xlarge,
  maxWidth: '1200px',
  margin: '0 auto',
});

export const title = style({
  fontSize: '2rem',
  marginBottom: vars.space.large,
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: vars.space.medium,
});

export const card = style({
  backgroundColor: vars.colors.cardBg,
  padding: vars.space.large,
  borderRadius: '8px',
  border: `1px solid ${vars.colors.textSecondary}`,
});

export const valueRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: vars.space.medium,
  fontSize: '1.2rem',
});