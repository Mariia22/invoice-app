
"use server";

import { revalidatePath } from "next/cache"
import { createInvoiceDB, deleteInvoiceDB, editInvoiceDB, setInvoiceStatusToPaidDB } from "./db"
import { Client, FormInput, Invoice, Status } from "./types"
import { calculateTotal, formatCurrentDate, generateInvoiceId, setNewDate } from './functions';

export async function createNewInvoice(data: FormInput, status: Status) {
  let invoiceId = generateInvoiceId(6);
  const currentDate = formatCurrentDate(data.invoiceData);
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
    paymentDue: setNewDate(currentDate,Number(data.paymentTerms)),
    paymentTerms: Number(data.paymentTerms),
    status: status,
    clientId: 0,
    client: client,
    total: calculateTotal(data.items),
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

export async function editInvoice(data: FormInput, id:string | undefined) {
  if (id) {
  const currentDate = new Date(Date.parse(data.invoiceData));
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
  const invoice:Omit<Invoice, "item" | "status"> = {
    id: id,
    createdAt: formatCurrentDate(data.invoiceData),
    description: data.description, 
    paymentDue: setNewDate(currentDate,Number(data.paymentTerms)),
    paymentTerms: Number(data.paymentTerms),
    clientId: 0,
    client: client,
    total: calculateTotal(data.items),
    addressId: 0,
    senderAddress: {
      id: 0,
      street: data.senderStreetAddress,
      city: data.senderCity,
      postcode: data.senderPostCode,
      country: data.senderCountry
    }

  }
  await editInvoiceDB(invoice, client, data.items)
  revalidatePath(`/invoices/${id}`)
} else {
  createNewInvoice(data, Status.Draft)
}
}

export async function setPaidStatusToInvoice(id: string) {
  await setInvoiceStatusToPaidDB(id)
  revalidatePath(`/invoices/${id}`)
}

export async function deleteInvoice(id: string) {
  await deleteInvoiceDB (id)
  revalidatePath(`/`)
}
