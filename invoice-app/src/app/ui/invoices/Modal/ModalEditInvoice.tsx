"use client";

import { Invoice, ModalFormType } from "@/app/lib/types";
import FormInvoice from "../Form/FormInvoice";
import IdHeadline from "../../shared/IdHeadline";
import HeaderContent from "../../shared/HeaderContent";

type ModalEditInvoiceProps = {
  isEditing: boolean,
  id?: string,
  invoice?: Invoice
}

export default function ModalEditInvoice({ id, invoice, isEditing }: ModalEditInvoiceProps) {
  return (
    <div className="flex bg-text w-10/12 dark:bg-darkText rounded-r-xl xl:w-7/12 xl:rounded-r-3xl" onClick={(event: React.MouseEvent<HTMLElement>) => event.stopPropagation()}>
      <div className="hidden xl:flex xl:flex-col xl:justify-between xl:rounded-r-[30px] xl:bg-headerBackground">
        <HeaderContent />
      </div>
      <div className="flex flex-col">
        {id
          ? <p className="mt-6 text-2xl font-bold text-headerText dark:text-text md:px-14 md:pt-14 xl:pt-10">Edit <IdHeadline id={id} /></p>
          : <p className="mt-6 font-bold text-2xl md:mt-0 md:px-14 md:pt-14 xl:pt-10">New Invoice</p>
        }
        <FormInvoice isEditing={isEditing} invoice={invoice} isModal={true} />
      </div>
    </div>
  );
}
