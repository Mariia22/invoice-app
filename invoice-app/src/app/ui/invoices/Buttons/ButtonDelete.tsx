"use client"

export default function ButtonDelete({ id }: { id: string }) {

  function deleteInvoice() {
    console.log("delete", id)
  }

  return (<button className={`bg-contrast text-text py-3 px-5 mx-2 rounded-3xl font-bold`} onClick={() => deleteInvoice()}>Delete</button>)
}
