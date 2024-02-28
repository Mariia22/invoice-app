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
  streetAddress: string
  city: string
  postCode: string
  country: string
}

export type FormField = {
  id: number
  name: keyof FormInput
  defaultValue: string | number
  label: string
  type: string
  required: boolean
  gridCols: number
}

