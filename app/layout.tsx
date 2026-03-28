import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asesoría Sanpé | Gestoría Legal y Administrativa en Querétaro",
  description: "Expertos en trámites SAT, constitución de empresas y registro de marcas. Olivia Pérez y equipo con 15+ años de experiencia en Querétaro.",
  keywords: "gestoría Querétaro, trámites SAT, RFC, constitución de empresas, registro de marcas, IMPI, MUA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}