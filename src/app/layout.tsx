import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brillare",
  description: "Construa seus sonhos com quem sabe o que você precisa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="/logo.jpg" sizes="32x32" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
