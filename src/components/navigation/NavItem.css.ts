import { vars } from "@/styles/theme.css"
import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

const navItemBase = style({
    display: "flex",
    padding: vars.space.s,
    alignItems: "center",
    gap: vars.space.s,
    transition: "all 0.2s ease-in-out",
    textDecoration: 'none',
    color: vars.colors.textPrimary,
    borderRadius: vars.radii.button,
    width: "100%",
    boxSizing: 'border-box',
    border: '1px solid transparent'
})

export const navItem = recipe({
    base: navItemBase,
    variants: {
        active: {
            true: {
                backgroundColor: vars.colors.bgOverlay,
                border: `1px solid ${vars.colors.border}`,
            },
            false: {
                fontWeight:vars.fontWeights.regular,
                selectors: {
                    '&:hover': {
                        backgroundColor: vars.colors.bgSurface
                    }
                }
            }
        },
    },
    defaultVariants: {
        active: false
    }
})
