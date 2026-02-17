import { vars } from '@/styles/theme.css'
import { createVar, style } from '@vanilla-extract/css'

export const gridRowsNumber = createVar()

export const body = style({
    display: 'inline-grid',
    rowGap: vars.space.s,
    columnGap: vars.space.s,
    gridTemplateRows: `repeat($${gridRowsNumber},fit-content(100%))`,
    gridTemplateColumns: 'auto auto',
})