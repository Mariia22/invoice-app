import { FormInput } from "@/app/lib/types";
import { UseFormRegister } from "react-hook-form";
import { paymentTermsOptions } from "./formData";

export default function FormPaymentSection({ register, isEditing }: { register: UseFormRegister<FormInput>, isEditing: boolean }) {
  return (
    <section className="flex flex-col mt-10 px-6 w-full gap-y-6 md:px-14 xl:grid xl:grid-cols-2 xl:gap-x-6">
      <div className="text-left flex flex-col w-full gap-y-2">
        <label className="field-label">Invoice Date</label>
        <input {...register(`invoiceData`, { required: `The field is required` })} className="field" type={isEditing ? "text" : "date"} disabled={isEditing} />
      </div>
      <div className="text-left flex flex-col w-full gap-y-2">
        <label className="field-label">Payment Terms</label>
        <select {...register("paymentTerms")} defaultValue="paymentTerms" className="field">
          {paymentTermsOptions.map(option => (<option key={option.id} value={option.value}>{option.label}</option>))}
        </select>
      </div>
      <div className="text-left flex flex-col w-full gap-y-2 xl:col-span-2">
        <label className="field-label">Project Description</label>
        <input {...register("description", { required: `The field is required` })} className="field" type="text" />
      </div>
    </section>
  )
}
