"use client";

import { ModalType } from "@/app/lib/types";
import { ModalWindow } from "@/app/providers";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function ModalDeleteInvoice({ id }: { id: string }) {
  const { setOpenModal } = useContext(ModalWindow) as ModalType
  const router = useRouter();

  function deleteInvoice() {
    setOpenModal(false)
    console.log("delete", id)
    router.push(`/`)
  }

  function cancelDeletionInvoice() {
    setOpenModal(false)
  }

  return (
    <div className="flex flex-col m-auto p-8 w-[327px] h-[220px] bg-text shadow-modal rounded-lg">
      <h3 className="mb-2 font-bold text-2xl">Confirm Deletion</h3>
      <p className="text-secondaryDark">Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>
      <div className="flex self-end gap-2 mt-5">
        <button type="button" className="bg-tableColor text-secondary py-3 px-5 rounded-3xl" onClick={cancelDeletionInvoice}>Cancel</button>
        <button type="button" className="bg-contrast text-text py-3 px-5 rounded-3xl" onClick={deleteInvoice}>Delete</button>
      </div>
    </div>
  );
}
