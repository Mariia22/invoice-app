import { Invoice } from "@/app/lib/types";
import ButtonBack from "@/app/ui/invoices/Buttons/ButtonBack";
import ButtonCancel from "@/app/ui/invoices/Buttons/ButtonCancel";
import ButtonSaveChanges from "@/app/ui/invoices/Buttons/ButtonSaveChanges";
import FormInvoice from "@/app/ui/invoices/Form/FormInvoice";
import Footer from "@/app/ui/shared/Footer";
import IdHeadline from "@/app/ui/shared/IdHeadline";

export default function EditPage({ params }: { params: Invoice }) {
  return (
    <>
      <div className="mt-8 mx-6 mb-6">
        <ButtonBack />
        <div className="mt-6 text-2xl font-bold text-headerText">Edit <IdHeadline id={params.id} /></div>
        <FormInvoice params={params} />
      </div>
      <Footer>
        <ButtonCancel name="Cancel" />
        <ButtonSaveChanges name="Save Changes" isEditing={true} />
      </Footer>
    </>)
}
