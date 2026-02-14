import { recipe } from "@vanilla-extract/recipes"
import { vars } from "@/styles/theme.css"
import { style } from "@vanilla-extract/css"

const baseRow = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    paddingLeft: vars.space.m,
})

export const typeLabel = style({
    color: vars.colors.textMuted,
    fontSize: vars.fontSizes.caption,
})

export const nameText = style({
    color: vars.colors.textPrimary,
    fontSize: vars.fontSizes.h3,
    fontWeight: vars.fontWeights.medium,
})

export const nameAndValue = style({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
})

export const transactionRecipe = recipe({
    base: baseRow,

    variants: {
        type: {
            income: {
                borderLeft: `4px solid ${vars.colors.income}`,
            },
            survival: {
                borderLeft: `4px solid ${vars.colors.survival}`,
            },
            eudaimonia: {
                borderLeft: `4px solid ${vars.colors.eudaimonia}`,
            },
            resilience: {
                borderLeft: `4px solid ${vars.colors.resilience}`,
            },
            transfer: {
                borderLeft: `4px solid ${vars.colors.textMuted}`,
            },
        },
    },
})

export const amountText = recipe({
    base: {
        fontFamily: vars.fonts.mono,
        fontSize: vars.fontSizes.bodyL,
        fontWeight: vars.fontWeights.regular,
    },
    variants: {
        colorType: {
            income: { color: vars.colors.income },
            expense: { color: vars.colors.textPrimary },
        },
    },
})
