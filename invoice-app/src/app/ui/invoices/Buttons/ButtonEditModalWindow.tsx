"use client"

import { ModalFormType } from "@/app/lib/types";
import { FormWindow } from "@/app/providers";
import { useContext } from "react";
import Button from "../../shared/Button";

export default function ButtonEditModalWindow() {
  const { setFormModal } = useContext(FormWindow) as ModalFormType

  function openModalForDeletingInvoice() {
    setFormModal(true)
  }

  return (
    <Button
      style="bg-tableColor dark:bg-headerBackground text-secondary dark:text-secondaryPale"
      onClick={openModalForDeletingInvoice}
      text="Edit" />
  )
}
