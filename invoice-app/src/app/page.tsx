import ButtonAdd from "./ui/invoices/ButtonAdd";
import InvoiceCard from "./ui/invoices/InvoiceCard";
import data from "./data.json"

export default function Invoices() {

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-headerText dark:text-text">Invoices</h1>
          <p className="text-secondaryDark">{data.length} invoices</p>
        </div>
        <div className="flex items-center">
          <div className="w-[53px] h-[15px]">Filter</div>
          <ButtonAdd />
        </div>
      </div>
      <div>
        {data.map(invoice => (<InvoiceCard key={invoice.id} {...invoice} />))}
      </div>
    </div>
  );
}
