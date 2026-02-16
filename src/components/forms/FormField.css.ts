import { colFlexContainer } from "@/styles/containers.css"
import { vars } from "@/styles/theme.css"
import { style } from "@vanilla-extract/css"

const background = style({
    backgroundColor: vars.colors.bgBase,
    border: `1px solid ${vars.colors.border}`,
    borderRadius: vars.radii.button,
    padding: vars.space.s,
    width: "fit-content",
    height: "fit-content",
})

export const fieldContainer = style([
    colFlexContainer,
    {
        padding: vars.space.s,
        gap: 4,
    },
])

export const label = style([
    fieldContainer,
    {
        color: vars.colors.textSecondary,
        fontSize: vars.fontSizes.bodyS,
        alignSelf: 'end'
    },
])

export const inputField = style([
    background,
    {
        height: "42px",
        width: "100%",
        color: vars.colors.textPrimary,

        ":focus": {
            outline: "none",
            boxShadow: `0 0 5px 2px ${vars.colors.border}`,
        },
    },
])
