import ButtonAdd from "./ui/invoices/Buttons/ButtonAdd";
import InvoiceCard from "./ui/invoices/InvoiceCard";
import EmptyPage from "./ui/invoices/EmptyPage";
import { getAllInvoices } from "./lib/data";
import { Status } from "./lib/types";
import Image from "next/image";
import InvoiceFilter from "./ui/invoices/InvoiceFilter";

export default async function Invoices() {
  let numberOfInvoices;
  const data = await getAllInvoices();

  if (data) {
    if (data.length === 0) {
      numberOfInvoices = "No"
    } else {
      numberOfInvoices = data.length
    }
  } else {
    return (<div>Failed to fetch invoices</div>)
  }

  return (
    <div className="py-8 px-6 bg-background text-darkText dark:bg-darkText dark:text-background">
      <div className="flex items-center justify-between pb-8">
        <div>
          <h1 className="text-2xl font-bold text-headerText dark:text-text">Invoices</h1>
          <p className="text-secondaryDark">{numberOfInvoices} invoices</p>
        </div>
        <div className="flex items-center gap-4 md:gap-10">
          <InvoiceFilter />
          <ButtonAdd />
        </div>
      </div>
      <div>
        {data.length === 0 && <EmptyPage />}
        {data.length > 0 && data.map(invoice => (<InvoiceCard key={invoice.id} id={invoice.id} clientName={invoice.client.clientName} paymentDue={invoice.paymentDue} total={invoice.total} status={Status[invoice.status]} />))}
      </div>
    </div>
  );
}
