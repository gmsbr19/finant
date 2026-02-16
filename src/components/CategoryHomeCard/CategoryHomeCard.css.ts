import { style } from "@vanilla-extract/css"
import { vars } from "@/styles/theme.css"
import { bodyM, bodyS, moneyL, moneyM } from "@/styles/typography.css"
import { colFlexContainer } from "@/styles/containers.css"

export const card = style([
    colFlexContainer,
    {
        width: "100%",
        padding: vars.space.l,
        justifyContent: "center",
        gap: vars.space.m,

        borderRadius: vars.radii.card,
        border: `1px solid ${vars.colors.border}`,
        background: '#000',
    },
])

export const cardTop = style([
    colFlexContainer,
    {
        gap: "4px",
        alignSelf: "stretch",
    },
])

export const cardTopLabel = style([bodyM])

export const valueLabelContainer = style([
    colFlexContainer,
    {
        gap: vars.space.s,
    },
])

export const valueLabel = style([
    moneyL,
    {
        whiteSpace: "nowrap",
    },
])

export const progressBarContainer = style({
    height: "4px",
    width: "100%",
})

export const progressBarBackground = style({
    height: "100%",
    width: "100%",
    backgroundColor: vars.colors.border,
})

export const progressBarFill = style({
    height: "100%",
})

export const availableMoneyContainer = style({
    display: "flex",
    alignItems: "center",
    gap: vars.space.s,
    justifyContent: "space-between",
    width: "100%",
})

export const availableMoneyLabel = style([
    bodyS,
    {
        color: vars.colors.textSecondary,
    },
])

export const availableMoneyValue = style([moneyM])
