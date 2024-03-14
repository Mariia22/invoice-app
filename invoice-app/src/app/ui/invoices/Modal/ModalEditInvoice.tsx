"use client";

import { Invoice, ModalFormType } from "@/app/lib/types";
import { FormWindow } from "@/app/providers";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import FormInvoice from "../Form/FormInvoice";
import IdHeadline from "../../shared/IdHeadline";

type ModalEditInvoiceProps = {
  id?: string,
  invoice?: Invoice
}

export default function ModalEditInvoice({ id, invoice }: ModalEditInvoiceProps) {
  return (
    <div className="flex flex-col w-10/12 bg-text dark:bg-darkText rounded-r-xl">
      {id
        ? <p className="mt-6 text-2xl font-bold text-headerText dark:text-text md:px-14 md:pt-14">Edit <IdHeadline id={id} /></p>
        : <p className="mt-6 font-bold text-2xl md:mt-0 md:px-14 md:pt-14">New Invoice</p>
      }
      <FormInvoice isEditing={true} invoice={invoice} />
    </div>
  );
}
