import { Invoice } from "@/app/lib/types";
import InvoiceStatus from "./InvoiceStatus";
import { formatDate, formatPrice } from "@/app/lib/functions";
import Link from "next/link";


export default function InvoiceCard({ id, clientName, paymentDue, total, status }: Invoice) {
  return (
    <Link
      href={`/invoices/${id}`}
      className="grid grid-cols-2 mb-4 px-6 py-6 bg-text rounded-lg dark:bg-cardColor dark:text-text md:grid-cols-5 md:grid-rows-1">
      <div className="grid grid-cols-1 justify-between place-items-start md:grid-cols-2">
        <p className="font-bold text-base">
          <span className="text-secondary">#</span>
          {id}
        </p>
        <p className="text-secondary dark:text-secondaryPale pt-6 md:pt-0">Due {formatDate(paymentDue)}</p>
      </div>
      <div className="text-secondary dark:text-text justify-self-end md:justify-self-auto">{clientName}</div>
      <p className="font-bold text-base dark:text-text pt-2">{formatPrice(total)}</p>
      <InvoiceStatus status={status} />
    </Link>)
}
