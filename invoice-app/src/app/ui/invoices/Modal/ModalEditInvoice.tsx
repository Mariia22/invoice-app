"use client";

import { Invoice, ModalFormType } from "@/app/lib/types";
import { FormWindow } from "@/app/providers";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import FormInvoice from "../Form/FormInvoice";
import IdHeadline from "../../shared/IdHeadline";
import ButtonCancel from "../Buttons/ButtonCancel";
import ButtonSaveDraft from "../Buttons/ButtonSaveDraft";
import ButtonSaveChanges from "../Buttons/ButtonSaveChanges";

type ModalEditInvoiceProps = {
  id?: string,
  invoice?: Invoice
}

export default function ModalEditInvoice({ id, invoice }: ModalEditInvoiceProps) {
  const { setFormModal } = useContext(FormWindow) as ModalFormType
  const router = useRouter();

  function deleteInvoice() {
    setFormModal(false)
    console.log("delete", id)
    router.push(`/`)
  }

  function cancelDeletionInvoice() {
    setFormModal(false)
  }

  return (
    <div className="flex flex-col w-10/12 bg-text dark:bg-darkText rounded-r-xl md:p-16">
      {id
        ? (<p className="mt-6 text-2xl font-bold text-headerText dark:text-text">Edit <IdHeadline id={id} /></p>)
        : <p className="mt-6 font-bold text-2xl md:mt-0">New Invoice</p>
      }
      <FormInvoice isEditing={true} invoice={invoice} />
    </div>
  );
}
