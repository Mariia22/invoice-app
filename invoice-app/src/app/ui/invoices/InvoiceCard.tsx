import { Invoice } from "@/app/lib/types";
import InvoiceStatus from "./InvoiceStatus";


export default function InvoiceCard({ id, clientName, createdAt, total, status }: Invoice) {
  return (
    <section className="grid grid-cols-2 mb-4 px-6 py-6 bg-text rounded-lg dark:bg-cardColor dark:text-text md:grid-cols-5 md:grid-rows-1">
      <div className="grid grid-cols-1 justify-between place-items-start md:grid-cols-2">
        <p className="font-bold text-base">
          <span className="text-secondary">#</span>
          {id}
        </p>
        <p className="text-secondary pt-6 md:pt-0">Due {createdAt}</p>
      </div>
      <div className="text-secondary justify-self-end md:justify-self-auto">{clientName}</div>
      <p className="font-bold text-base pt-2">£ {total}</p>
      <InvoiceStatus status={status} />
    </section>)
}
