import type { Metadata } from "next";

import "@/styles/global.css"

export const metadata: Metadata = {
  title: "Finant",
  description: "Gestão financeira pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
