'use client'

import { ThemeProvider } from "next-themes";
import { createContext, useState } from "react";
import { ModalType } from "./lib/types";

export const ModalWindow = createContext<ModalType | null>(null);

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setOpenModal] = useState(false);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ModalWindow.Provider value={{ isModalOpen, setOpenModal }}>
        {children}
      </ModalWindow.Provider>
    </ThemeProvider>
  )
}
