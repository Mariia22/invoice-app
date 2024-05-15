"use client";

import { buttonNames, deleteMessage } from "@/app/lib/const";
import { ModalType } from "@/app/lib/types";
import { ModalWindow } from "@/app/providers";
import { useRouter } from "next/navigation";
import { useContext} from "react";
import { useForm } from "react-hook-form";

type ModalDeleteInvoiceProps = {
  id: string
  handleClick: () => Promise<void>
}

export default function ModalDeleteInvoice({ id, handleClick }: ModalDeleteInvoiceProps) {
  const { setOpenModal } = useContext(ModalWindow) as ModalType
  const router = useRouter();
  const { handleSubmit, formState: { isSubmitting }} = useForm();

async function deleteInvoice() {
      try {
        await handleClick()
        if(!isSubmitting) {
          setOpenModal(false)
          router.push(`/`)         
        }
      }
      catch (error) {
        console.log(error)
      }
  }

  function cancelDeletionInvoice() {
    setOpenModal(false)
  }

  return (
    <div className="flex flex-col m-auto p-8 w-[327px] h-[220px] bg-text dark:bg-cardColor shadow-modal rounded-lg md:w-[480px] md:h-[249px] md:p-12" onClick={(event: React.MouseEvent<HTMLElement>) => event.stopPropagation()}>
      <h3 className="mb-2 font-bold text-2xl dark:text-text md:mb-3">Confirm Deletion</h3>
      <p className="text-secondaryDark text-sm">{deleteMessage(id)}</p>
      <form onSubmit={handleSubmit(deleteInvoice)} className="flex self-end gap-2 mt-5">
        <button type="button" className="bg-tableColor dark:bg-headerBackground text-secondary dark:text-secondaryPale py-3 px-5 rounded-3xl hover:opacity-60" onClick={cancelDeletionInvoice}>Cancel</button>
        <button type="submit" className="bg-contrast text-text py-3 px-5 rounded-3xl hover:opacity-60">{isSubmitting ? buttonNames.deleting : buttonNames.delete}</button>
      </form>
    </div >
  );
}
