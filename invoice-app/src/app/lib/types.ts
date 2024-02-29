import { invoiceData } from './../ui/invoices/Form/formData';
import { Dispatch, SetStateAction} from "react";

export type Invoice = {
  id: string;
  createdAt: string;
  paymentDue: string;
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

type Item = {
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
  paymentTerms: string
  projectDescription: string
  items: Item[]
}

export type FormField = {
  id: number
  name: DeepKeys<FormInput>
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
