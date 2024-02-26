"use client"

import { ModalType } from "@/app/lib/types";
import { ModalWindow } from "@/app/providers";
import { useContext } from "react";

export default function ButtonDelete() {
  const { setOpenModal } = useContext(ModalWindow) as ModalType;

  return (
    <button className="bg-contrast text-text text-sm py-3 px-4 mx-2 rounded-3xl font-bold" onClick={() => setOpenModal(true)}>Delete</button>
  )
}
