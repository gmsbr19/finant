import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const fieldContainer = style({
    display: 'flex',
    alignItems: 'center',

    padding: vars.space.s,
    gap: vars.space.s
})