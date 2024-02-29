import ButtonBack from "@/app/ui/invoices/Buttons/ButtonBack";
import FormInvoice from "@/app/ui/invoices/Form/FormInvoice";

export default function CreatePage() {
  return (
    <>
      <div className="mt-8 mx-6 mb-6">
        <ButtonBack />
        <p className="mt-6 font-bold text-2xl">New Invoice</p>
      </div>
      <FormInvoice isEditing={false} />
    </>
  )
}
