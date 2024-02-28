'use client'

import { FormField, FormInput, Invoice } from "@/app/lib/types"
import { SubmitHandler, useForm } from "react-hook-form"
import data from "../../../data.json"
import { buildFormSectionBillFrom, buildFormSectionBillTo, buildFormSectionInvoiceData, buildFormSectionItemList } from "./formData"
import FormSection from "./FormSection"
import FormHeader from "./FormHeader"

export default function FormInvoice({ params }: { params: Invoice }) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>()
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data)
  const invoice = data[0]
  const billFrom: FormField[] = buildFormSectionBillFrom(invoice)
  // const billTo: FormField[] = buildFormSectionBillTo(invoice)
  // const invoiceData: FormField[] = buildFormSectionInvoiceData(invoice)
  // const itemList: FormField[] = buildFormSectionItemList(invoice)

  return (
    <form
      className="flex flex-col justify-start items-center w-full m-auto"
      onSubmit={handleSubmit(onSubmit)}>
      <FormSection marginTop={6}>
        <FormHeader header="Bill From" />
        {billFrom.map((field) => (
          <div key={field.id} className={`text-left flex flex-col w-full col-span-${field.gridCols}`}>
            <label className="text-secondary">{field.label}</label>
            <input
              {...register(field.name, {
                required: field.required,
              })}
              className={`border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500 col-span-${field.gridCols}}`}
              type={field.type}
              defaultValue={field.defaultValue}
            />
            {errors[field.name] && (
              <span>This field is required</span>
            )}
          </div>
        ))}
      </FormSection>
    </form>
  )
}
