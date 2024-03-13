import { getFilteredInvoices, getAllInvoices } from "./lib/data";
import { Invoice } from "./lib/types";
import InvoiceFilter from "./ui/invoices/InvoiceFilter";
import ButtonAdd from "./ui/invoices/Buttons/ButtonAdd";
import EmptyPage from "./ui/invoices/EmptyPage";
import InvoiceCard from "./ui/invoices/InvoiceCard";
import { Suspense } from "react";
import PortalFormWrapper from "./ui/invoices/Modal/PortalFormWrapper";
import ModalEditInvoice from "./ui/invoices/Modal/ModalEditInvoice";
import ButtonAddModalWindow from "./ui/invoices/Buttons/ButtonAddModalWindow";

export default async function Invoices({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  let statuses = Array.isArray(searchParams.status)
    ? searchParams.status
    : searchParams.status
      ? [searchParams.status]
      : [];
  let data: Invoice[] | undefined = [];
  let numberOfInvoices: number;

  if (statuses.length === 0) {
    data = await getAllInvoices();
    numberOfInvoices = data?.length || 0;
  } else {
    data = await getFilteredInvoices(statuses)
    numberOfInvoices = data?.length || 0;
  }


  return (
    <div className="py-8 px-6 text-darkText dark:text-background md:py-14">
      <div className="flex items-center justify-between pb-8">
        <div>
          <h1 className="text-2xl font-bold text-headerText dark:text-text">Invoices</h1>
          <p className="text-secondaryDark md:hidden">{numberOfInvoices > 0 ? numberOfInvoices : "No"} invoices</p>
          <p className="hidden text-secondaryDark md:inline-block">{numberOfInvoices > 0 ? `There are ${numberOfInvoices} total` : "No"} invoices</p>
        </div>
        <div className="flex items-center gap-4 md:gap-10 group">
          <InvoiceFilter statuses={statuses} />
          <ButtonAdd />
          <ButtonAddModalWindow />
        </div>
      </div>
      {data?.length === 0 && <EmptyPage />}
      <Suspense
        fallback={<p>Loading...</p>}
        key={JSON.stringify(searchParams)}
      >
        <div className="group-has-[[data-pending]]:animate-pulse md:py-14">
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
      <PortalFormWrapper>
        <ModalEditInvoice />
      </PortalFormWrapper>
    </div>
  );
}
