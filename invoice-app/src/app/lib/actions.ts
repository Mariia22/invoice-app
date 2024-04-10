
"use server";

import { revalidatePath } from "next/cache"
import { createInvoiceDB, deleteInvoiceDB, setInvoiceStatusToPaidDB } from "./data"
import { FormInput, Status } from "./types"

export async function createNewInvoice(id:string, data: FormInput, status: Status) {
  console.log(data,status)
  const currentDate = new Date(Date.parse(data.invoiceData));
  const paymentData = new Date(currentDate.setDate(currentDate.getDate() + Number(data.paymentTerms)));
  const items = data.items.map((item) =>({name: item.name,quantity: item.quantity,price: item.price,total: item.total}))
  const total = data.items.reduce((acc,item) => acc + item.total, 0)
  await createInvoiceDB(id, data, items, total, status, paymentData)
  revalidatePath(`/`)
}

export async function setPaidStatusToInvoice(id: string) {
  await setInvoiceStatusToPaidDB(id)
  revalidatePath(`/invoices/${id}`)
}

export async function deleteInvoice(id: string) {
  await deleteInvoiceDB (id)
  revalidatePath(`/`)
}
