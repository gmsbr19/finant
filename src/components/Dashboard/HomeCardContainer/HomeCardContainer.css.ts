import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const homeCardContainer = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: '1fr',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: vars.space.m,
    width: '100%'
});