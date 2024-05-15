"use client"

import { useRouter } from "next/navigation"
import Button from "../../shared/Button";
import { buttonNames } from "@/app/lib/const";

export default function ButtonEdit({ id }: { id: string }) {
  const router = useRouter();

  function editInvoice() {
    router.push(`/invoices/${id}/edit`)
  }

  return (
    <Button
      style="bg-tableColor dark:bg-headerBackground text-secondary dark:text-secondaryPale hover:bg-secondaryPale"
      onClick={editInvoice}
      text={buttonNames.edit} />
  )
}
