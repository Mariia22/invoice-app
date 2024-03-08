"use client";
import { FilterCheckbox, Invoice, Status } from "@/app/lib/types";
import { useState } from "react";
import InvoiceCard from "./InvoiceCard";
import EmptyPage from "./EmptyPage";
import InvoiceFilter from "./InvoiceFilter";
import ButtonAdd from "./Buttons/ButtonAdd";

type InvoiceListProps = {
  data: Invoice[] | undefined;
}

export default function InvoiceList({ data }: InvoiceListProps) {
  const [invoices, setInvoices] = useState<Invoice[] | undefined>(data)

  async function filterData(state: FilterCheckbox) {
    const filters = Object.entries(state).filter(item => item[1]).map(item => item[0].charAt(0).toUpperCase() + item[0].slice(1))
    if (filters.length > 0) {
      const dataCopy: Invoice[] | undefined = data && [...data]
      const filteredInvoices = dataCopy && dataCopy.filter(item => filters.indexOf(item.status) > -1)
      setInvoices(filteredInvoices as Invoice[])
    }
  }

  return (
    <>
      <div className="flex items-center justify-between pb-8">
        <div>
          <h1 className="text-2xl font-bold text-headerText dark:text-text">Invoices</h1>
          <p className="text-secondaryDark">{invoices && invoices.length > 0 ? invoices.length : "No"} invoices</p>
        </div>
        <div className="flex items-center gap-4 md:gap-10">
          <InvoiceFilter onChange={filterData} />
          <ButtonAdd />
        </div>
      </div>
      {invoices?.length === 0 && <EmptyPage />}
      {invoices && invoices.map((invoice: Invoice) => (
        <InvoiceCard
          key={invoice.id}
          id={invoice.id}
          clientName={invoice.client.clientName}
          paymentDue={invoice.paymentDue}
          total={invoice.total}
          status={invoice.status} />
      ))}
    </>
  )
}
