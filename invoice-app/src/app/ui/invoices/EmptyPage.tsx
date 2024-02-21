import Image from "next/image";

export default function EmptyPage() {
  return (
    <div className="flex flex-col items-center mt-16">
      <Image src="/assets/illustration-empty.svg" width={193} height={160} alt="There are no invoices" />
      <p className="mt-10 mb-4 font-bold text-2xl">There is nothing here</p>
      <p className="text-center text-secondaryDark">Create an invoice by clicking the</p>
      <p className="text-center text-secondaryDark"><span className="font-bold">New</span> button and get started</p>
    </div>
  )
}
