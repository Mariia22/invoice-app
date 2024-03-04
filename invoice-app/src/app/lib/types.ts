import { Dispatch, SetStateAction} from "react";

export type Invoice = {
  id: string;
  createdAt: string;
  paymentDue: string;
  paymentTerms: number;
  clientName: string;
  description:string;
  total: number;
  status: string;
  clientEmail: string;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
};


export type Address = {
  street: string;
  city: string;
  postCode: string;
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
