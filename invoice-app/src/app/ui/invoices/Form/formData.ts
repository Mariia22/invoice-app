import { FormField } from "@/app/lib/types";

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
