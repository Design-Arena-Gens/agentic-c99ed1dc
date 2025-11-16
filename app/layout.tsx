import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Pourquoi ton business ne grandit plus",
  description:
    "Stratégies de croissance pour entreprises, comment débloquer la croissance, business scaling tips et conseils marketing pour PME."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
