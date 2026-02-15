import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const colFlexContainer = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
});

export const surfaceBg = style({
    backgroundColor: vars.colors.bgBase,
    border: `1px solid ${vars.colors.border}`,
    borderRadius: vars.radii.button,
    padding: vars.space.s
})