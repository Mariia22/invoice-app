import { buttonNames } from "@/app/lib/const";
import ButtonBack from "@/app/ui/invoices/Buttons/ButtonBack";
import FormInvoice from "@/app/ui/invoices/Form/FormInvoice";

export default function CreatePage() {
  return (
    <>
      <div className="pt-8 px-6 pb-6 bg-text dark:bg-darkText">
        <ButtonBack url="/" />
        <p className="mt-6 font-bold text-2xl">{buttonNames.newInvoice}</p>
      </div>
      <FormInvoice isEditing={false} isModal={false} url={"/"} />
    </>
  )
}
