'use client'

import { Provider } from 'react-redux'
import { ThemeProvider } from "next-themes";
import { createContext, useRef, useState } from "react";
import { ModalType } from "./lib/types";
import { AppStore, makeStore } from "./lib/store";

export const ModalWindow = createContext<ModalType | null>(null);

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setOpenModal] = useState(false);
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }


  return (
    <Provider store={storeRef.current}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ModalWindow.Provider value={{ isModalOpen, setOpenModal }}>
          {children}
        </ModalWindow.Provider>
      </ThemeProvider>
    </Provider>
  )
}
