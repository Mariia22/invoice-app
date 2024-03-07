import { formatDate } from '@/app/lib/functions';
import { FormField, Invoice } from "@/app/lib/types";

export const newInvoice = {
  id: "",
  createdAt: Date(),
  paymentDue: "",
  paymentTerms: 0,
  clientName: "",
  description: "",
  total: 0,
  clientEmail: "",
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  items: []
}

export const defaultFormValues = (invoice:Invoice) => {
  return {
  senderStreetAddress: invoice.senderAddress.street,
  senderCity: invoice.senderAddress.city,
  senderPostCode: invoice.senderAddress.postcode,
  senderCountry: invoice.senderAddress.country,
  clientName: invoice.client.clientName,
  clientEmail: invoice.client.clientEmail,
  clientStreetAddress: invoice.client.clientAddress.street,
  clientCity: invoice.client.clientAddress.city,
  clientPostCode: invoice.client.clientAddress.postcode,
  clientCountry: invoice.client.clientAddress.country,
  invoiceData: formatDate(invoice.createdAt),
  paymentTerms: invoice.paymentTerms,
  description: invoice.description,
  items: invoice.item
  }
}

export const billFromData:FormField[]= [
    {
      id: 1,
      name: "senderStreetAddress",
      label: "Street Address",
      type: "text",
      required: true,
      gridCols: 2,
    },
    {
      id: 2,
      name: "senderCity",
      label: "City",
      type: "text",
      required: true,
      gridCols: 1,
    },
    {
      id: 3,
      name: "senderPostCode",
      label: "Post Code",
      type: "text",
      required: true,
      gridCols: 1,
    },
    {
      id: 4,
      name: "senderCountry",
      label: "Country",
      type: "text",
      required: true,
      gridCols: 2,
    }
  ]

  export const billToData:FormField[]= [
    {
      id: 1,
      name: "clientName",
      label: "Client’s Name",
      type: "text",
      required: true,
      gridCols: 2,
    },
    {
      id: 2,
      name: "clientEmail",
      label: "Client’s Email",
      type: "text",
      required: true,
      gridCols: 2,
    },
    {
      id: 3,
      name: "clientStreetAddress",
      label: "Street Address",
      type: "text",
      required: true,
      gridCols: 2,
    },
    {
      id: 4,
      name: "clientCity",
      label: "City",
      type: "text",
      required: true,
      gridCols: 1,
    },
    {
      id: 5,
      name: "clientPostCode",
      label: "Post Code",
      type: "text",
      required: true,
      gridCols: 1,
    },
    {
      id: 6,
      name: "clientCountry",
      label: "Country",
      type: "text",
      required: true,
      gridCols: 2,
    }
  ]

  export const paymentTermsOptions = [
    {
      id: 1,
      value: 1,
      label: "Net 1 Day"
    },
    {
      id: 2,
      value: 7,
      label: "Net 7 Days"
    },
    {
      id: 3,
      value: 30,
      label: "Net 30 Days"
    },
  ]
