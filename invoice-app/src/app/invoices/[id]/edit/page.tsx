import { Invoice } from "@/app/lib/types";
import ButtonBack from "@/app/ui/invoices/Buttons/ButtonBack";

export default function EditPage({ id }: Invoice) {
  return (
    <div className="mt-8 mx-6 mb-6">
      <ButtonBack />
    </div>)
}
