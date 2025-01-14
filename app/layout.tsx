import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gliker = localFont({
  src: "./Gliker-Bold.woff2",
  variable: "--font-gliker",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Dev3Pack",
  description: "The onchain & online builder school for minorities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={gliker.variable}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
