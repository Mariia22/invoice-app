
"use server";

import { revalidatePath } from "next/cache"
import { createInvoiceDB, deleteInvoiceDB, setInvoiceStatusToPaidDB } from "./db"
import { Client, FormInput, Invoice, Status } from "./types"
import { generateInvoiceId } from './functions';

export async function createNewInvoice(data: FormInput, status: Status) {
  let invoiceId = generateInvoiceId(6);
  const currentDate = new Date(Date.parse(data.invoiceData));
  const paymentData = new Date(currentDate.setDate(currentDate.getDate() + Number(data.paymentTerms)));
  const total = data.items.reduce((acc,item) => acc + item.total, 0)
  const client:Client = {
    id: 0,
    addressId: 0,
    clientName: data.clientName,
    clientEmail:data.clientEmail,
    clientAddress: {
      id:0,
      street: data.clientStreetAddress,
      city: data.clientCity,
      postcode: data.clientPostCode,
      country: data.clientCountry
    }
  }
  const invoice:Omit<Invoice, "item"> = {
    id: invoiceId, 
    createdAt: currentDate,
    description: data.description, 
    paymentDue: paymentData,
    paymentTerms: Number(data.paymentTerms),
    status: status,
    clientId: 0,
    client: client,
    total: total,
    addressId: 0,
    senderAddress: {
      id: 0,
      street: data.senderStreetAddress,
      city: data.senderCity,
      postcode: data.senderPostCode,
      country: data.senderCountry
    }

  }
  await createInvoiceDB(invoice, client, data.items)
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
