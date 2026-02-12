import { createGlobalTheme } from "@vanilla-extract/css"

export const vars = createGlobalTheme(":root", {
    colors: {
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
    },
    space: {
        xs: "4px",
        s: "8px",
        m: "16px",
        l: "24px",
        xl: "32px",
    },
    fonts: {
        sans: "var(--font-geist-sans), -apple-system, system-ui, sans-serif",
        mono: "var(--font-geist-mono), ui-monospace, monospace",
    },
    fontSizes: {
        display: "2.5rem", // 40px
        h1: "2rem", // 32px
        h2: "1.5rem", // 24px
        h3: "1.25rem", // 20px
        bodyL: "1.125rem", // 18px
        bodyM: "1rem", // 16px
        bodyS: "0.875rem", // 14px
        caption: "0.75rem", // 12px
    },
    fontWeights: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
    },
    lineHeights: {
        headings: "1.2",
        body: "1.5",
    },
    radii: {
        button: "6px",
        card: "12px",
        full: "9999px",
    },
})
