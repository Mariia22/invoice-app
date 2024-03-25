"use client"

import Button from "../../shared/Button"

export default function ButtonPaid({ id }: { id: string }) {
  function markInvoice() {
    console.log("Mark as Paid", id)
  }

  return (
    <Button
      style="py-4 px-6 bg-primary text-text hover:bg-primaryPale"
      onClick={markInvoice}
      text="Mark as Paid" />
  )
}
