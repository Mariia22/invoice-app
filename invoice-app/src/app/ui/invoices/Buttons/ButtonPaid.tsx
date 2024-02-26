"use client"

import Button from "../../shared/Button"

export default function ButtonPaid({ id }: { id: string }) {
  function markInvoice() {
    console.log("Mark as Paid", id)
  }

  return (
    <Button
      style="bg-primary text-text"
      onClick={markInvoice}
      text="Mark as Paid" />
  )
}
