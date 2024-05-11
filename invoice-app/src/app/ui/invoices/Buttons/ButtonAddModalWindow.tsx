"use client";

import { ModalFormType } from "@/app/lib/types";
import { FormWindow } from "@/app/providers";
import Image from "next/image";
import { useContext } from "react";

export default function ButtonAddModalWindow() {
  const { setFormModal } = useContext(FormWindow) as ModalFormType

  return (
    <button className="items-center bg-primary w-[90px] md:w-[150px] h-[44px] md:h-[48px] font-bold text-base text-text rounded-3xl hidden md:flex hover:opacity-60" onClick={() => setFormModal(true)}>
      <div className="flex items-center justify-center rounded-full w-8 h-8 mx-[6px] my-[6px] font-bold bg-text">
        <Image src="/assets/icon-plus.svg" width={11} height={11} alt="Add invoice" />
      </div>
      New Invoice
    </button>)
}
