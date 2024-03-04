"use client";
import { useTheme } from "next-themes";

export default function InvoiceStatus({ status }: { status: string }) {
  const { resolvedTheme } = useTheme();
  let color, bgColor

  if (status === "paid") {
    bgColor = "bg-paidColor"
    color = "text-paidColor"
  } else if (status === "pending") {
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

  return (<div className={`flex items-center justify-center justify-self-end w-[104px] h-[40px] ${bgColor} bg-opacity-5 rounded-md`}>
    <div className="flex items-center justify-center">
      <div className={`w-2 h-2 rounded-full ${bgColor} mr-1`}></div>
      <p className={`${color} first-letter:uppercase`}>{status}</p>
    </div>
  </div>)

}
