"use client";

import { Invoice } from "@/app/lib/types";
import FormInvoice from "../Form/FormInvoice";
import IdHeadline from "../../shared/IdHeadline";

type ModalEditInvoiceProps = {
  isEditing: boolean,
  id?: string,
  invoice?: Invoice
}

export default function ModalEditInvoice({ id, invoice, isEditing }: ModalEditInvoiceProps) {
  return (
    <div className="flex flex-col w-10/12 bg-text dark:bg-darkText rounded-r-xl">
      {id
        ? <p className="mt-6 text-2xl font-bold text-headerText dark:text-text md:px-14 md:pt-14">Edit <IdHeadline id={id} /></p>
        : <p className="mt-6 font-bold text-2xl md:mt-0 md:px-14 md:pt-14">New Invoice</p>
      }
      <FormInvoice isEditing={isEditing} invoice={invoice} />
    </div>
  );
}
