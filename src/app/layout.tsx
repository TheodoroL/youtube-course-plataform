import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nuito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodarSe - Os melhores cursos de programação ",
  description:
    "Os melhores cursos de programação para você aprender a programar do zero e se tornar um desenvolvedor de sucesso.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${nuito.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
