import { buttonNames } from "@/app/lib/const";
import { getInvoiceById } from "@/app/lib/db";
import { Invoice } from "@/app/lib/types";
import ButtonBack from "@/app/ui/invoices/Buttons/ButtonBack";
import FormInvoice from "@/app/ui/invoices/Form/FormInvoice";
import IdHeadline from "@/app/ui/shared/IdHeadline";
import { notFound } from "next/navigation";

export default async function EditPage({ params }: { params: { id: string } }) {
  const invoice: Invoice | undefined | null = await getInvoiceById(params.id)

  if (!invoice) {
    notFound();
  }

  return (
    <>
      <div className="pt-8 px-6 bg-text dark:bg-darkText">
        <ButtonBack url={`/invoices/${params.id}`} />
        <div className="mt-6 text-2xl font-bold text-headerText dark:text-text">{buttonNames.edit}<IdHeadline id={params.id} /></div>
      </div>
      <FormInvoice isEditing={true} invoice={invoice} isModal={true} url={`/invoices/${params.id}`} />
    </>)
}
