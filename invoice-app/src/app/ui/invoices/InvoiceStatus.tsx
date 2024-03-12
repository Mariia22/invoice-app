"use client";
import { Status } from "@/app/lib/types";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function InvoiceStatus({ status }: { status: string }) {
  const { resolvedTheme } = useTheme();
  let color, bgColor

  if (status === Status.Paid) {
    bgColor = "bg-paidColor"
    color = "text-paidColor"
  } else if (status === Status.Pending) {
    bgColor = "bg-pendingColor"
    color = "text-pendingColor"
  } else {
    if (resolvedTheme === "light") {
      bgColor = "bg-draftColor"
      color = "text-draftColor"
    } else {
      bgColor = "bg-secondaryPale"
      color = "text-secondaryPale"
    }
  }

  return (
    <div className="flex gap-5 justify-end">
      <div className={`flex items-center justify-center justify-self-end w-[104px] h-[40px] ${bgColor} bg-opacity-5 rounded-md`}>
        <div className="flex items-center justify-center">
          <div className={`w-2 h-2 rounded-full ${bgColor} mr-1`}></div>
          <p className={`${color} first-letter:uppercase`}>{status}</p>
        </div>
      </div>
      <Image width={7} height={10} src="/assets/icon-arrow-right.svg" alt="arrow-right" className="hidden self-center justify-self-end md:block" />
    </div>)

}
