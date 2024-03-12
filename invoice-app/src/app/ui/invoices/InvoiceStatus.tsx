import { Status } from "@/app/lib/types";
import Image from "next/image";

export default function InvoiceStatus({ status, withArrow }: { status: string, withArrow: boolean }) {
  let color, bgColor

  if (status === Status.Paid) {
    bgColor = "bg-paidColor"
    color = "text-paidColor"
  } else if (status === Status.Pending) {
    bgColor = "bg-pendingColor"
    color = "text-pendingColor"
  } else if (status === Status.Draft) {
    bgColor = "bg-draftColor dark:bg-secondaryPale"
    color = "text-draftColor dark:text-secondaryPale"
  }

  return (
    <div className="flex gap-5 justify-end">
      <div className={`flex items-center justify-center justify-self-end w-[104px] h-[40px] ${bgColor} bg-opacity-5 dark:bg-opacity-5 rounded-md`}>
        <div className="flex items-center justify-center">
          <div className={`w-2 h-2 rounded-full ${bgColor} mr-1`}></div>
          <p className={`${color} first-letter:uppercase font-bold`}>{status}</p>
        </div>
      </div>
      {withArrow && <Image width={7} height={10} src="/assets/icon-arrow-right.svg" alt="arrow-right" className="hidden self-center justify-self-end md:block" />}
    </div>)

}
