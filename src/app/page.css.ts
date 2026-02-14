import { style } from "@vanilla-extract/css"
import { vars } from "../styles/theme.css"
import { colFlexContainer } from "@/styles/containers.css"

export const background = style([
    colFlexContainer,
    {
        backgroundColor: "#000000",
        paddingTop: vars.space.xl,
        paddingBottom: vars.space.xl,
        paddingLeft: "20%",
        paddingRight: "20%",
        width: '100%',
        height: '100%',
        gap: vars.space.l
    },
])

export const dateLabel = style({
    color: vars.colors.textSecondary,
    fontSize: vars.fontSizes.h3,
    fontWeight: vars.fontWeights.regular,
    lineHeight: vars.lineHeights.headings,
    marginBottom: vars.space.s,
})

export const timeline = style({
    display: "flex",
    flexDirection: "column",
    gap: vars.space.m,
    width: '100%'
})

export const title = style({
    fontSize: vars.fontSizes.h1,
    fontWeight: vars.fontWeights.semibold,
    lineHeight: vars.lineHeights.headings,
    color: vars.colors.textPrimary,
    marginBottom: vars.space.l,
})

export const groupedTransactionsContainer = style({
    display: "flex",
    flexDirection: "column",
    gap: vars.space.m,
    width: '100%'
})

export const transactionsContainer = style({
    display: "flex",
    flexDirection: "column",
    gap: vars.space.s,
})

export const divider = style({
    height: "1px",
    backgroundColor: vars.colors.border,
    width: "100%",
    marginTop: vars.space.m,
    marginBottom: vars.space.m,
})
