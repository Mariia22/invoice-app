import ButtonAdd from "./ui/invoices/Buttons/ButtonAdd";
import InvoiceCard from "./ui/invoices/InvoiceCard";
import data from "./data.json"
import EmptyPage from "./ui/invoices/EmptyPage";

export default function Invoices() {
  let numberOfInvoices;
  if (data.length === 0) {
    numberOfInvoices = "No"
  } else {
    numberOfInvoices = data.length
  }

  return (
    <div className="py-8 px-6 bg-background text-darkText dark:bg-darkText dark:text-background">
      <div className="flex items-center justify-between pb-8">
        <div>
          <h1 className="text-2xl font-bold text-headerText dark:text-text">Invoices</h1>
          <p className="text-secondaryDark">{numberOfInvoices} invoices</p>
        </div>
        <div className="flex items-center">
          <div className="w-[53px] h-[15px]">Filter</div>
          <ButtonAdd />
        </div>
      </div>
      <div>
        {data.length === 0 && <EmptyPage />}
        {data.length > 0 && data.map(invoice => (<InvoiceCard key={invoice.id} {...invoice} />))}
      </div>
    </div>
  );
}
