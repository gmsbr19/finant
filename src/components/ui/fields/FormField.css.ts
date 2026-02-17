import { vars } from "@/styles/theme.css"
import { bodyM, bodyS } from "@/styles/typography.css"
import { createVar, style } from "@vanilla-extract/css"

export const colSpan = createVar()

export const formFieldContainer = style({
    display: "flex",
    height: "fit-content",
    flexDirection: "column",
    alignItems: "flex-start",
    gridColumn: colSpan,
    width: '100%'
})

export const label = style([bodyS, { color: vars.colors.textSecondary }])

export const iconInputContainer = style({
    display: "flex",
    alignItems: "center",
    gap: 4,
    padding: 4,
    minWidth: 'unset',
    width: "100%",

    backgroundColor: vars.colors.bgSurface,
    border: `1px solid ${vars.colors.border}`,
    borderRadius: vars.radii.button,
})

export const iconContainer = style({
    display: "flex",
    padding: 4,
    color: vars.colors.textSecondary
})

export const input = style([bodyM, {
    display: "flex",
    padding: "4px 8px",
    color: vars.colors.textPrimary,
    borderRadius: 4,
    outline: 'none',
    width: "100%",

    ":enabled": {
        border: `1px solid ${vars.colors.border}`,
        backgroundColor: vars.colors.bgBase,
    },

    ":disabled": {
        border: "1px solid transparent",
        backgroundColor: "transparent",
    },
}])
