import { createGlobalTheme } from "@vanilla-extract/css"

export const fontSizes = {
    display: "40px",
    h1: "32px",
    h2: "24px",
    h3: "20px",
    bodyL: "18px",
    bodyM: "16px",
    bodyS: "14px",
    caption: "12px",
} as const

export const colors = {
    bgBase: "#0A0A0A",
    bgSurface: "#171717",
    bgOverlay: "#1A1A1A",
    textPrimary: "#EDEDED",
    textSecondary: "#A1A1AA",
    textMuted: "#525252",
    survival: "#0EA5E9",
    eudaimonia: "#FACC15",
    resilience: "#A855F7",
    income: "#4ADE80",
    danger: "#F87171",
    border: "#262626",
} as const

export const space = {
    xs: "4px",
    s: "8px",
    m: "16px",
    l: "24px",
    xl: "32px",
} as const

export const fonts = {
    sans: "var(--font-geist-sans), -apple-system, system-ui, sans-serif",
    mono: "var(--font-geist-mono), ui-monospace, monospace",
} as const

export const fontWeights = {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
} as const

export const lineHeights = {
    headings: "1.2",
    body: "1.5",
} as const

export const radii = {
    button: "6px",
    card: "12px",
    full: "9999px",
} as const

export const vars = createGlobalTheme(":root", {
    colors,
    space,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
})
