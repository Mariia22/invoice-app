import ButtonBack from "@/app/ui/invoices/Buttons/ButtonBack";
import ButtonCancel from "@/app/ui/invoices/Buttons/EditCreatePage/ButtonCancel";
import ButtonSaveChanges from "@/app/ui/invoices/Buttons/EditCreatePage/ButtonSaveChanges";
import ButtonSaveDraft from "@/app/ui/invoices/Buttons/EditCreatePage/ButtonSaveDraft";
import FormInvoice from "@/app/ui/invoices/FormInvoice";
import Footer from "@/app/ui/shared/Footer";

export default function CreatePage({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="mt-8 mx-6 mb-6">
        <ButtonBack />
        <p className="mt-6 font-bold text-2xl">New Invoice</p>
        <FormInvoice id={params.id} />
      </div>
      <Footer>
        <ButtonCancel name="Discard" />
        <ButtonSaveDraft />
        <ButtonSaveChanges name="Save & Send" isEditing={false} />
      </Footer>
    </>
  )
}
