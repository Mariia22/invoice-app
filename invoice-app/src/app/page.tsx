
import { getAllInvoices } from "./lib/data";
import { Invoice } from "./lib/types";
import InvoiceFilter from "./ui/invoices/InvoiceFilter";
import ButtonAdd from "./ui/invoices/Buttons/ButtonAdd";
import EmptyPage from "./ui/invoices/EmptyPage";
import InvoiceCard from "./ui/invoices/InvoiceCard";

export default async function Invoices() {
  const data: Invoice[] | undefined = await getAllInvoices();

  return (
    <div className="py-8 px-6 bg-background text-darkText dark:bg-darkText dark:text-background">
      <div className="flex items-center justify-between pb-8">
        <div>
          <h1 className="text-2xl font-bold text-headerText dark:text-text">Invoices</h1>
          <p className="text-secondaryDark">{data && data.length > 0 ? data.length : "No"} invoices</p>
        </div>
        <div className="flex items-center gap-4 md:gap-10">
          <InvoiceFilter />
          <ButtonAdd />
        </div>
      </div>
      {data?.length === 0 && <EmptyPage />}
      {data && data?.length > 0 && data.map((invoice: Invoice) => (
        <InvoiceCard
          key={invoice.id}
          id={invoice.id}
          clientName={invoice.client.clientName}
          paymentDue={invoice.paymentDue}
          total={invoice.total}
          status={invoice.status} />
      ))}
    </div>
  );
}
