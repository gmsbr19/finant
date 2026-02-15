import { colFlexContainer } from '@/styles/containers.css'
import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const nav = style([colFlexContainer, {
    padding: vars.space.m,
    gap: vars.space.s,
    height: '100vh',
    width: 'fit-content',
    minWidth: '218px',
    border: `1px solid ${vars.colors.border}`,
    borderLeft: 0,
    borderRadius: `0 ${vars.radii.card} ${vars.radii.card} 0`
}])