import { Invoice } from "@/app/lib/types";
import ButtonBack from "@/app/ui/invoices/Buttons/ButtonBack";
import FormInvoice from "@/app/ui/invoices/Form/FormInvoice";
import IdHeadline from "@/app/ui/shared/IdHeadline";

export default function EditPage({ params }: { params: Invoice }) {

  return (
    <>
      <div className="mt-8 mx-6">
        <ButtonBack />
        <div className="mt-6 text-2xl font-bold text-headerText dark:text-text">Edit <IdHeadline id={params.id} /></div>
      </div>
      <FormInvoice isEditing={true} />
    </>)
}
