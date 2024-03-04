"use client"

import { useRouter } from "next/navigation"
import Button from "../../shared/Button";

export default function ButtonEdit({ id }: { id: string }) {
  const router = useRouter();

  function editInvoice() {
    router.push(`/invoices/${id}/edit`)
  }

  return (
    <Button
      style="bg-tableColor dark:bg-headerBackground text-secondary dark:text-secondaryPale"
      onClick={editInvoice}
      text="Edit" />
  )
}
