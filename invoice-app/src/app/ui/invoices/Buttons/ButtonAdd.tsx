import Image from "next/image";
import Link from "next/link";

export default function ButtonAdd() {
  return (
    <Link
      href="/invoices/create"
      className="flex items-center bg-primary w-[90px] md:w-[150px] h-[44px] md:h-[48px] font-bold text-base text-text rounded-3xl">
      <div className="flex items-center justify-center rounded-full w-8 h-8 mx-[6px] my-[6px] font-bold bg-text">
        <Image src="/assets/icon-plus.svg" width={11} height={11} alt="Add invoice" />
      </div>
      <p className="md:hidden">New</p>
      <p className="hidden md:inline-block">New Invoice</p>
    </Link>)
}
