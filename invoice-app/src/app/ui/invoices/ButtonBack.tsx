"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ButtonBack() {
  const router = useRouter()
  return (
    <div className="flex item-center w-[100px] h-[20px] hover:cursor-pointer" onClick={() => router.back()}>
      <Image src="/assets/icon-arrow-left.svg" width={7} height={10} alt="arrow left" />
      <p className="font-bold text-base ml-6">Go back</p>
    </div>
  )
}
