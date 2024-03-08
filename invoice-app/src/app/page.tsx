
import { getAllInvoices } from "./lib/data";
import InvoiceList from "./ui/invoices/InvoiceList";
import { Invoice } from "./lib/types";

export default async function Invoices() {
  const data: Invoice[] | undefined = await getAllInvoices();

  return (
    <div className="py-8 px-6 bg-background text-darkText dark:bg-darkText dark:text-background">
      <InvoiceList data={data} />
    </div>
  );
}
