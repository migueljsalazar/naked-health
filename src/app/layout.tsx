import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Naked Health | Progressive Medical Guidance",
  description: "Thoughtful, progressive, and unafraid guidance for modern health, recovery, and optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased selection:bg-brand-200 selection:text-brand-950`}
      >
        {children}
      </body>
    </html>
  );
}
