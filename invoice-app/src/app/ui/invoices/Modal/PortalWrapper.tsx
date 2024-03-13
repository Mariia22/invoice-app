'use client'

import { ModalType } from "@/app/lib/types";
import { ModalWindow } from "@/app/providers";
import { useContext, useEffect } from "react";
import Portal from "../../shared/Portal";

export default function PortalWrapper({ children }: { children: React.ReactNode }) {
  const { isModalOpen } = useContext(ModalWindow) as ModalType

  useEffect(() => {
    isModalOpen
      ? document.body.style.overflow = "hidden"
      : document.body.style.overflow = "scroll"
  }, [isModalOpen])

  return isModalOpen ? <Portal classes="fixed left-0 top-0 w-full h-full flex items-center bg-black bg-opacity-50 z-10 overflow-hidden">{children}</Portal> : null
};

