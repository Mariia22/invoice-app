'use client'

import { ModalType } from "@/app/lib/types";
import { ModalWindow } from "@/app/providers";
import { MouseEvent, useContext, useEffect } from "react";
import Portal from "../../shared/Portal";

export default function PortalWrapper({ children }: { children: React.ReactNode }) {
  const { isModalOpen, setOpenModal } = useContext(ModalWindow) as ModalType

  useEffect(() => {
    isModalOpen
      ? document.body.style.overflow = "hidden"
      : document.body.style.overflow = "scroll"
  }, [isModalOpen])

  return isModalOpen ? <Portal classes="fixed left-0 top-0 w-full h-full flex items-center bg-black bg-opacity-50 z-10 overflow-hidden" closePortal={() => setOpenModal(false)}>{children}</Portal> : null
};

