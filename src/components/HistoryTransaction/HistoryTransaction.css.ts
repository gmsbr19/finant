import { recipe } from "@vanilla-extract/recipes"
import { vars } from "@/styles/theme.css"
import { style } from "@vanilla-extract/css"
import { growOnHoverAnim } from "@/styles/animations.css"

export const baseRow = style([
    {
        display: "flex",
        alignItems: "center",

        borderRadius: vars.radii.card,
        cursor: "pointer",
        gap: vars.space.s,
        transition: 'transform 0.2s ease-in-out',

        ":hover": {
            transform: `translate(${vars.space.m}, 0)`
        },
    },
])

export const iconContainer = style({
    display: 'flex',
    padding: vars.space.s,
    borderRadius: vars.radii.full,
    backgroundColor: `color-mix(in srgb, ${vars.colors.survival}, transparent 90%)`,
    color: `color-mix(in srgb, ${vars.colors.survival}, transparent 50%)`,
    width: 'fit-content',
    height: 'fit-content'
})

export const infoContainer = style({
    display: "flex",
    flexDirection: 'column',
    width: '100%'
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
