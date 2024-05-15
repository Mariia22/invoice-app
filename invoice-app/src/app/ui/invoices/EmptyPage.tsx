import { buttonNames, textAndHeaders } from "@/app/lib/const";
import Image from "next/image";

export default function EmptyPage() {
  return (
    <div className="flex flex-col items-center mt-16 md:mt-52">
      <Image src="/assets/illustration-empty.svg" width={193} height={160} alt="There are no invoices" className="w-[193px] h-[160px] md:w-[241px] md:h-[200px]" />
      <p className="mt-10 mb-4 font-bold text-2xl">{textAndHeaders.noInvoice}</p>
      <p className="text-xs text-center text-secondaryDark">{textAndHeaders.createInvoice}</p>
      <p className="text-xs text-center text-secondaryDark"><span className="font-bold md:hidden">{buttonNames.new}</span><span className="font-bold hidden md:inline">{buttonNames.newInvoice}</span>{textAndHeaders.howToCreateInvoice}</p>
    </div>
  )
}
