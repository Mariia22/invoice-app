"use client"

export default function ButtonPaid({ id }: { id: string }) {
  function markInvoice() {
    console.log("Mark as Paid", id)
  }

  return (<button className={`bg-primary text-text text-sm py-3 px-4 mx-2 rounded-3xl font-bold`} onClick={() => markInvoice()}>Mark as Paid</button>)
}
