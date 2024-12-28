import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Software Engineer Portfolio",
  description:
    "Full-stack engineer with expertise in React, Next.js, and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <main className="min-h-screen bg-background text-foreground">
          {children}
        </main>
      </body>
    </html>
  );
}
