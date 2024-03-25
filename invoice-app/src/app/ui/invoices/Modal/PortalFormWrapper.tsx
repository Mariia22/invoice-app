'use client'

import { ModalFormType } from "@/app/lib/types";
import { useContext, useEffect } from "react";
import Portal from "../../shared/Portal";
import { FormWindow } from "@/app/providers";

export default function PortalFormWrapper({ children }: { children: React.ReactNode }) {
  const { isFormOpen, setFormModal } = useContext(FormWindow) as ModalFormType

  useEffect(() => {
    isFormOpen
      ? document.body.style.overflow = "hidden"
      : document.body.style.overflow = "scroll"
  }, [isFormOpen])

  return isFormOpen ? <Portal classes="fixed left-0 top-20 w-full h-full flex items-start bg-black bg-opacity-50 z-10 overflow-y-auto xl:top-0" closePortal={() => setFormModal(false)}>{children}</Portal> : null
};

