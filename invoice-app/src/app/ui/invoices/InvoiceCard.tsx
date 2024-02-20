import { Invoice } from "@/app/lib/types";


export default function InvoiceCard({ id, clientName, createdAt, total, status }: Invoice) {
  return (
    <section className="grid grid-cols-2 mb-4 px-6 py-6 bg-text rounded-lg dark:bg-cardColor dark:text-text">
      <div className="flex flex-col justify-between">
        <h2>#{id}</h2>
        <p>{createdAt}</p>
      </div>
      <p>{clientName}</p>
      <p>{total}</p>
      <p>{status}</p>
    </section>)
}
