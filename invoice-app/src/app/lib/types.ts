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
}

export type FormField = {
  id: number
  name: keyof FormInput
  label: string
  type: string
  required: boolean
  gridCols: number
}

