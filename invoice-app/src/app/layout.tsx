import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const font = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoices",
  description: "App for accounts management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
