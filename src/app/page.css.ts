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

export const body = style({
    display: 'flex',
})