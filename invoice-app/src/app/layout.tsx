import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./ui/shared/Header";

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
      <head>
        <link rel="shortcut icon" href="/assets/favicon.png" />
      </head>
      <body className="flex flex-col font-medium w-screentext-[13px] bg-background dark:bg-darkText xl:flex-row xl:justify-between 2xl:justify-center">
        <Providers>
          <Header />
          <main>
            {children}
          </main>
          <div id="modal-root" />
        </Providers>
      </body>
    </html>
  );
}
