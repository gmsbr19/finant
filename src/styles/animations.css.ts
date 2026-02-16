import { style } from '@vanilla-extract/css'

export const growOnHoverAnim = style({
    transition: 'transform 0.2s ease-in-out',
    ":hover": {
        transform: 'scale(1.04)',
    }
})