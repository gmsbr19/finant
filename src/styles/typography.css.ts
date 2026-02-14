import { style } from "@vanilla-extract/css"
import { vars } from "./theme.css"

export const display = style({
    fontSize: vars.fontSizes.display,
    fontWeight: vars.fontWeights.bold,
    lineHeight: vars.lineHeights.headings,
    color: vars.colors.textPrimary,
})

const body = style({
    fontStyle: "normal",
    fontWeight: vars.fontWeights.medium,
    lineHeight: vars.lineHeights.body,
})

export const bodyS = style([
    body,
    {
        fontSize: vars.fontSizes.bodyS
    }
])

export const bodyM = style([
    body,
    {
        fontSize: vars.fontSizes.bodyM,
    },
])

export const moneyL = style({
    fontFamily: vars.fonts.mono,
    color: vars.colors.textPrimary,
    fontSize: vars.fontSizes.h1,
    fontStyle: "normal",
    fontWeight: vars.fontWeights.semibold,
    lineHeight: "normal",
})

export const moneyM = style([
    moneyL,
    {
        fontSize: vars.fontSizes.h3,
    },
])
