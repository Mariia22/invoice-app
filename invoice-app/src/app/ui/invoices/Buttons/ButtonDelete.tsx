"use client"

import { ModalType } from "@/app/lib/types";
import { ModalWindow } from "@/app/providers";
import { useContext } from "react";
import Button from "../../shared/Button";

export default function ButtonDelete() {
  const { setOpenModal } = useContext(ModalWindow) as ModalType;

  function openModalForDeletingInvoice() {
    setOpenModal(true)
  }

  return (
    <Button
      style="py-4 px-6 bg-contrast text-text hover:bg-contrastPale"
      onClick={openModalForDeletingInvoice}
      text="Delete" />
  )
}
