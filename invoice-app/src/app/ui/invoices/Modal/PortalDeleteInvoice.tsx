'use client'

import { ModalType } from "@/app/lib/types";
import { ModalWindow } from "@/app/providers";
import { useContext, useEffect } from "react";
import Portal from "../../shared/Portal";
import ModalDeleteInvoice from "./ModalDeleteInvoice";

export default function PortalDeleteInvoice({ id }: { id: string }) {
  const { isModalOpen } = useContext(ModalWindow) as ModalType

  useEffect(() => {
    isModalOpen
      ? document.body.style.overflow = "hidden"
      : document.body.style.overflow = "scroll"
  }, [isModalOpen])

  return isModalOpen ? <Portal><ModalDeleteInvoice id={id} /></Portal> : null
};

