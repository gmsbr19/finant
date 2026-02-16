import { colFlexContainer, surfaceBg } from "@/styles/containers.css"
import { space, vars } from "@/styles/theme.css"
import { style } from "@vanilla-extract/css"

export const transactionForm = style([
    surfaceBg,
    {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        width: "fit-content",
    },
])

const baseButton = style([
    surfaceBg,
    {
        color: vars.colors.textPrimary,
        transition: "all 0.2s ease-in-out",
        display: "flex",
        ":hover": {
            cursor: "pointer",
        },
    },
])

const createButtonStyle = (mainColor: string, baseColor: string = mainColor, bg: string = vars.colors.bgBase) => style([
    baseButton,
    {
        color: baseColor,
        backgroundColor: bg,
        selectors: {
            "&:not(:disabled):hover": {
                color: mainColor,
                border: `1px solid ${mainColor}`,
            },
            "&:not(:disabled):active": {
                color: vars.colors.bgSurface,
                border: `1px solid ${vars.colors.bgSurface}`,
                backgroundColor: mainColor,
                transition: 'none'
            },
            "&:disabled": {
                opacity: 0.5,
                cursor: "not-allowed",
                filter: "grayscale(1)"
            }
        }
    }
])

export const incomeButton = createButtonStyle(vars.colors.income)

export const expenseButton = createButtonStyle(vars.colors.danger)

export const sendButton = createButtonStyle(vars.colors.income, vars.colors.textPrimary, vars.colors.bgSurface)

export const closeButton = createButtonStyle(vars.colors.danger, vars.colors.textMuted)

export const buttonsContainer = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    gap: vars.space.s,
    gridColumn: 2,
    marginTop: vars.space.s,
})

export const popupContainer = style([
    colFlexContainer,
    {
        width: "fit-content",
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translate(-50%, 0)",
        marginBottom: space.xl,
        alignItems: 'center'
    },
])
