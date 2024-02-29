import { FormField, Invoice } from "@/app/lib/types";

export const newInvoice = {
  id: "",
  createdAt: "",
  paymentDue: "",
  clientName: "",
  description: "",
  total: 0,
  status: "",
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
  senderPostCode: invoice.senderAddress.postCode,
  senderCountry: invoice.senderAddress.country,
  clientName: invoice.clientName,
  clientEmail: invoice.clientEmail,
  clientStreetAddress: invoice.clientAddress.street,
  clientCity: invoice.clientAddress.city,
  clientPostCode: invoice.clientAddress.postCode,
  clientCountry: invoice.clientAddress.country,
  invoiceData: invoice.createdAt,
  paymentTerms: invoice.paymentDue,
  projectDescription: invoice.description,
  items: invoice.items
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

  export const invoiceData:FormField[]= [
    {
      id: 1,
      name: "invoiceData",
      label: "Invoice Date",
      type: "text",
      required: true,
      gridCols: 2,
    },
    {
      id: 2,
      name: "paymentTerms",
      label: "Payment Terms",
      type: "text",
      required: true,
      gridCols: 1,
    },
    {
      id: 3,
      name: "projectDescription",
      label: "Project Description",
      type: "text",
      required: true,
      gridCols: 1,
    }
  ]

  export const itemList:FormField[]= [
    {
      id: 1,
      name: "name",
      label: "Item Name",
      type: "text",
      required: true,
      gridCols: 2,
    },
    {
      id: 2,
      name: "quantity",
      label: "Qty.",
      type: "text",
      required: true,
      gridCols: 1,
    },
    {
      id: 3,
      name: "price",
      label: "Price",
      type: "text",
      required: true,
      gridCols: 1,
    },
    {
      id: 4,
      name: "total",
      label: "Total",
      type: "text",
      required: true,
      gridCols: 1,
    }
  ]
