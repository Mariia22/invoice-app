import ButtonBack from "@/app/ui/invoices/Buttons/ButtonBack";
import ButtonCancel from "@/app/ui/invoices/Buttons/ButtonCancel";
import ButtonSaveChanges from "@/app/ui/invoices/Buttons/ButtonSaveChanges";
import FormInvoice from "@/app/ui/invoices/FormInvoice";
import Footer from "@/app/ui/shared/Footer";
import IdHeadline from "@/app/ui/shared/IdHeadline";

export default function EditPage({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="mt-8 mx-6 mb-6">
        <ButtonBack />
        <div className="mt-6">Edit <IdHeadline id={params.id} /></div>
        <FormInvoice id={params.id} />
      </div>
      <Footer>
        <ButtonCancel name="Cancel" />
        <ButtonSaveChanges name="Save Changes" isEditing={true} />
      </Footer>
    </>)
}
