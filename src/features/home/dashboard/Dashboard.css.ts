import { colFlexContainer } from "@/styles/containers.css"
import { vars } from "@/styles/theme.css"
import { style } from "@vanilla-extract/css"

export const dashboardContainer = style([
    colFlexContainer,
    {
        gap: vars.space.m,
        width: '100%'
    },
])
