import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

import "@/styles/global.css"
import NavSidebar from "@/components/navigation/NavSidebar"

export const metadata: Metadata = {
    title: "Finant",
    description: "Gestão financeira pessoal",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="pt-BR"
            className={`${GeistSans.variable} ${GeistMono.variable}`}
        >
            <body suppressHydrationWarning>
                <NavSidebar />
                <main style={{ flex: 1 }}>{children}</main>
            </body>
        </html>
    )
}
