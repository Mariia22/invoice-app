"use client";

import { useRouter } from "next/navigation"
import Button from "../../shared/Button";
import { useContext } from "react";
import { FormWindow } from "@/app/providers";
import { ModalFormType } from "@/app/lib/types";

type ButtonCancelProps = {
  name: string
  url: string
}

export default function ButtonCancel({ name, url }: ButtonCancelProps) {
  const router = useRouter()
  const { isFormOpen, setFormModal } = useContext(FormWindow) as ModalFormType

  function cancel() {
    isFormOpen ? setFormModal(false) : router.push(url)
  }

  return (
    <Button
      style="bg-tableColor dark:bg-headerBackground text-secondary dark:text-secondaryPale hover:bg-secondaryPale md:py-4 md:px-6"
      onClick={cancel}
      text={name} />
  )
}
