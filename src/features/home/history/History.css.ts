import { colFlexContainer } from "@/styles/containers.css"
import { vars } from "@/styles/theme.css"
import { display } from "@/styles/typography.css"
import { style } from "@vanilla-extract/css"

export const historyContainer = style([
    colFlexContainer,
    {
        gap: vars.space.m,
        width: "100%"
    },
])

export const timeline = style({
    display: "flex",
    flexDirection: "column",
    gap: vars.space.m,
    width: "100%",
})

export const title = style([display])

export const groupedTransactionsContainer = style({
    display: "flex",
    flexDirection: "column",
    gap: vars.space.m,
    width: "100%",
})

export const transactionsContainer = style({
    display: "flex",
    flexDirection: "column",
    gap: vars.space.s,
})

export const dateLabel = style({
    color: vars.colors.textSecondary,
    fontSize: vars.fontSizes.h3,
    fontWeight: vars.fontWeights.regular,
    lineHeight: vars.lineHeights.headings,
    marginBottom: vars.space.s,
})

export const divider = style({
    height: "1px",
    backgroundColor: vars.colors.border,
    width: "100%",
    marginTop: vars.space.m,
    marginBottom: vars.space.m,
})
