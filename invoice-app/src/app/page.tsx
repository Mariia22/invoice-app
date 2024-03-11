
import { getFilteredInvoices, getAllInvoices } from "./lib/data";
import { Invoice } from "./lib/types";
import InvoiceFilter from "./ui/invoices/InvoiceFilter";
import ButtonAdd from "./ui/invoices/Buttons/ButtonAdd";
import EmptyPage from "./ui/invoices/EmptyPage";
import InvoiceCard from "./ui/invoices/InvoiceCard";
import { Suspense } from "react";

export default async function Invoices({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let statuses = Array.isArray(searchParams.status)
    ? searchParams.status
    : searchParams.status
      ? [searchParams.status]
      : [];
  let data: Invoice[] | undefined = [];

  if (statuses.length === 0) {
    data = await getAllInvoices();
  } else {
    data = await getFilteredInvoices(statuses)
  }


  return (
    <div className="py-8 px-6 bg-background text-darkText dark:bg-darkText dark:text-background">
      <div className="flex items-center justify-between pb-8">
        <div>
          <h1 className="text-2xl font-bold text-headerText dark:text-text">Invoices</h1>
          <p className="text-secondaryDark">{data && data.length > 0 ? data.length : "No"} invoices</p>
        </div>
        <div className="flex items-center gap-4 md:gap-10 group">
          <InvoiceFilter statuses={statuses} />
          <ButtonAdd />
        </div>
      </div>
      {data?.length === 0 && <EmptyPage />}
      <Suspense
        fallback={<p>Loading...</p>}
        key={JSON.stringify(searchParams)}
      >
        <div className="group-has-[[data-pending]]:animate-pulse">
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
      </Suspense>
    </div>
  );
}
