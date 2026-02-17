import { colFlexContainer } from "@/styles/containers.css"
import { vars } from "@/styles/theme.css"
import { style } from "@vanilla-extract/css"

export const overlay = style({
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
})

export const modalCard = style([
    colFlexContainer,
    {
        position: "fixed",
        width: "fit-content",
        minWidth: "400px",
        height: "fit-content",

        backgroundColor: vars.colors.bgBase,
        border: `1px solid ${vars.colors.border}`,
        borderRadius: vars.radii.card,
        gap: vars.space.s,
        padding: vars.space.s,
    },
])

export const topMenu = style({
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
})

export const footer = style({
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
})

export const closeButtonContainer = style({
    justifySelf: "end",
})

export const body = style([
    colFlexContainer,
    {
        gap: vars.space.m,
        padding: vars.space.s
    },
])

export const mainInfo = style([
    colFlexContainer,
    {
        gap: 0,
    },
])
