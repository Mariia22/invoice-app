import { FormField, Invoice } from "@/app/lib/types";

export function buildFormSectionBillFrom (invoice:Invoice):FormField[] {
  return [
    {
      id: 1,
      name: "streetAddress",
      defaultValue: invoice.senderAddress.street,
      label: "Street Address",
      type: "text",
      required: true,
      gridCols: 2,
    },
    {
      id: 2,
      name: "city",
      defaultValue: invoice.senderAddress.city,
      label: "City",
      type: "text",
      required: true,
      gridCols: 1,
    },
    {
      id: 3,
      name: "postCode",
      defaultValue: invoice.senderAddress.postCode,
      label: "Post Code",
      type: "text",
      required: true,
      gridCols: 1,
    },
    {
      id: 4,
      name: "country",
      defaultValue: invoice.senderAddress.country,
      label: "Country",
      type: "text",
      required: true,
      gridCols: 2,
    }
  ]
}

export function buildFormSectionBillTo (invoice:Invoice):FormField[] {
  return [
    {
      id: 1,
      name: "streetAddress",
      defaultValue: invoice.clientAddress.street,
      label: "Street Address",
      type: "text",
      required: true,
      gridCols: 1,
    },
    {
      id: 2,
      name: "streetAddress",
      defaultValue: invoice.clientAddress.street,
      label: "Street Address",
      type: "text",
      required: true,
      gridCols: 1,
    }
  ]
}

export function buildFormSectionInvoiceData (invoice:Invoice):FormField[] {
  return [
    {
      id: 1,
      name: "streetAddress",
      defaultValue: invoice.clientAddress.street,
      label: "Street Address",
      type: "text",
      required: true,
      gridCols: 1,
    },
    {
      id: 2,
      name: "streetAddress",
      defaultValue: invoice.clientAddress.street,
      label: "Street Address",
      type: "text",
      required: true,
      gridCols: 1,
    }
  ]
}

export function buildFormSectionItemList (invoice:Invoice):FormField[] {
  return [
    {
      id: 1,
      name: "streetAddress",
      defaultValue: invoice.senderAddress.street,
      label: "Street Address",
      type: "text",
      required: true,
      gridCols: 1,
    },
    {
      id: 2,
      name: "city",
      defaultValue: invoice.senderAddress.city,
      label: "City",
      type: "text",
      required: true,
      gridCols: 2,
    },
    {
      id: 3,
      name: "postCode",
      defaultValue: invoice.senderAddress.postCode,
      label: "Post Code",
      type: "text",
      required: true,
      gridCols: 2,
    },
    {
      id: 4,
      name: "country",
      defaultValue: invoice.senderAddress.country,
      label: "Country",
      type: "text",
      required: true,
      gridCols: 1,
    }
  ]
}

