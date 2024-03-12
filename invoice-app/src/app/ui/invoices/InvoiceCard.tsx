import { Client, Invoice, Status } from "@/app/lib/types";
import InvoiceStatus from "./InvoiceStatus";
import { formatDate, formatPrice } from "@/app/lib/functions";
import Link from "next/link";
import Image from "next/image";


export default function InvoiceCard({ id, clientName, paymentDue, total, status }: { id: string, clientName: string, paymentDue: Date, total: number, status: string }) {
  return (
    <Link
      href={`/invoices/${id}`}
      className="grid grid-cols-2 md:items-center mb-4 px-6 py-6 bg-text rounded-lg shadow-modal dark:bg-cardColor dark:text-text md:grid-cols-6 md:grid-rows-1 md:py-4">
      <div className="grid grid-cols-1 justify-between place-items-start md:grid-cols-2 md:col-span-2 md:items-center">
        <p className="font-bold text-base">
          <span className="text-secondary">#</span>
          {id}
        </p>
        <p className="text-secondary dark:text-secondaryPale pt-6 md:pt-0 md:text-sm">Due {formatDate(paymentDue)}</p>
      </div>
      <div className="text-secondary dark:text-text justify-self-end md:justify-self-center md:text-sm md:col-span-2 md:self-center">{clientName}</div>
      <p className="font-bold text-base dark:text-text pt-2 md:pt-0 md:self-center">{formatPrice(total)}</p>
      <InvoiceStatus status={status} />
    </Link>)
}
