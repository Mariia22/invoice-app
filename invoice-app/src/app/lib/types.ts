import { Dispatch, SetStateAction} from "react";
import { Prisma} from "@prisma/client";

const invoiceWithClients = Prisma.validator<Prisma.InvoiceDefaultArgs>()({
  include: { client: true },
})
export type Invoice = Prisma.InvoiceGetPayload<typeof invoiceWithClients>

export type Client =  {
id: number;
addressId: number;
clientName: string;
clientEmail: string; 
clientAddress: Address;
}

export enum  Status  {
  Paid ='Paid',
  Pending = 'Pending',
  Draft = 'Draft'
} 

export type Address = {
  street: string;
  city: string;
  postcode: string;
  country: string;
}

export type Item = {
  name: string;
  quantity:number;
  price: number;
  total: number;
}

export type ModalType = {
  isModalOpen: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

export type FormInput = {
  senderStreetAddress: string
  senderCity: string
  senderPostCode: string
  senderCountry: string
  clientName: string
  clientEmail: string
  clientStreetAddress: string
  clientCity: string
  clientPostCode: string
  clientCountry: string
  invoiceData: string
  paymentTerms: number
  description: string
  items: Item[]
}

export type FormField = {
  id: number
  name: keyof FormInput
  label: string
  type: string
  required: boolean
  gridCols: number
}

type DeepKeys<T> = T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? `${K}` | `${K}.${DeepKeys<T[K]>}`
        : never;
    }[keyof T]
  : never;

  export type FilterCheckbox = {
    draft:boolean;
    pending: boolean;
    paid: boolean
  }
