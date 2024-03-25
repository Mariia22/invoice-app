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
      style="bg-contrast text-text hover:bg-contrastPale md:py-4 md:px-6"
      onClick={openModalForDeletingInvoice}
      text="Delete" />
  )
}
