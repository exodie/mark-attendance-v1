import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Трекер",
  description: "Трекер посещаемости студентов в ПГУТИ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} bg-foreground`}>
        <main className="flex flex-col w-full min-h-screen">
          {children}

          <Footer />
        </main>
      </body>
    </html>
  );
}
