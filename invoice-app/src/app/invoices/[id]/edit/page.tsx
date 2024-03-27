import { getInvoiceById } from "@/app/lib/data";
import { Invoice } from "@/app/lib/types";
import ButtonBack from "@/app/ui/invoices/Buttons/ButtonBack";
import FormInvoice from "@/app/ui/invoices/Form/FormInvoice";
import IdHeadline from "@/app/ui/shared/IdHeadline";

export default async function EditPage({ params }: { params: { id: string } }) {
  const invoice: Invoice | undefined | null = await getInvoiceById(params.id)

  if (!invoice) {
    return (<div>Invoice is not found</div>)
  }

  return (
    <>
      <div className="mt-8 mx-6">
        <ButtonBack url={`/invoices/${params.id}`} />
        <div className="mt-6 text-2xl font-bold text-headerText dark:text-text">Edit <IdHeadline id={params.id} /></div>
      </div>
      <FormInvoice isEditing={true} invoice={invoice} />
    </>)
}
