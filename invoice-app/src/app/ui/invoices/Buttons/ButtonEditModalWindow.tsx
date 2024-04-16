"use client"

import { ModalFormType } from "@/app/lib/types";
import { FormWindow } from "@/app/providers";
import { useContext } from "react";
import Button from "../../shared/Button";

export default function ButtonEditModalWindow({isDisabled}:{isDisabled:boolean}) {
  const { setFormModal } = useContext(FormWindow) as ModalFormType

  function openModalForDeletingInvoice() {
    setFormModal(true)
  }

  return (
    <Button
      disabled={isDisabled}
      style="bg-tableColor dark:bg-headerBackground text-secondary dark:text-secondaryPale hover:bg-secondaryPale md:py-4 md:px-6"
      onClick={openModalForDeletingInvoice}
      text="Edit" />
  )
}
