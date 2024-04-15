import { Dispatch, SetStateAction} from "react";
import { Prisma} from "@prisma/client";

const invoiceWithClients = Prisma.validator<Prisma.InvoiceDefaultArgs>()({
  include: { client:{include:{clientAddress:true}}, senderAddress: true, item:true},
})
const clientWithAddress = Prisma.validator<Prisma.ClientDefaultArgs>()({
  include: { clientAddress: true}
})
export type Client = Prisma.ClientGetPayload<typeof clientWithAddress>
export type Invoice = Prisma.InvoiceGetPayload<typeof invoiceWithClients>

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

export type ItemPrisma = {
  id: number;
  name: string;
  quantity:number;
  price: number;
  total: number;
  invoiceId: string;
}

export type Item = {
  id?:number;
  name: string;
  quantity:number;
  price: number;
  total: number;
}

export type ModalType = {
  isModalOpen: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

export type ModalFormType = {
  isFormOpen: boolean;
  setFormModal: Dispatch<SetStateAction<boolean>>
}

export type FormInput = {
  id: string
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
  gridTabletCols: number
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
