"use client";

import { ModalFormType } from "@/app/lib/types";
import { FormWindow } from "@/app/providers";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function Logo() {
  const { setFormModal } = useContext(FormWindow) as ModalFormType

  return (
    <Link href="/">
      <Image src="/assets/logoColor.svg" width={80} height={80} alt="Logo" priority={true} className="object-contain w-auto h-auto hover:cursor-pointer md:h-[5rem] xl:w-[103px] xl:h-[103px]" onClick={() => setFormModal(false)} />
    </Link>
  )
}
