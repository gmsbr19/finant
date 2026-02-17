import { vars } from '@/styles/theme.css'
import { createVar, style } from '@vanilla-extract/css'

export const color = createVar()
export const hoverColor = createVar()

export const iconButton = style({
    border: `1px solid ${vars.colors.border}`,
    backgroundColor: vars.colors.bgBase,
    borderRadius: vars.radii.button,
    width: 'fit-content',

    display: 'flex',
    alignItems: 'center',
    padding: vars.space.s,

    color: color,
    transition: 'all 0.2s ease-in-out',

    cursor: 'pointer',

    ":hover": {
        borderColor: hoverColor,
        color: hoverColor
    },

    ":active": {
        backgroundColor: `color-mix(in srgb, ${hoverColor}, transparent 60%)`,
        color: hoverColor,
        borderColor: hoverColor,
        transform: 'scale(0.9)',
        transition: 'transform 0.05s ease'
    }
})