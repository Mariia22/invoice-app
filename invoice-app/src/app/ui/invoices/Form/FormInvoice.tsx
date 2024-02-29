'use client'

import { FormInput } from "@/app/lib/types"
import { SubmitHandler, useForm } from "react-hook-form"
import data from "../../../data.json"
import { billFromData, newInvoice } from "./formData"
import FormSection from "./FormSection"
import FormHeader from "./FormHeader"
import Footer from "../../shared/Footer"
import ButtonCancel from "../Buttons/ButtonCancel"
import ButtonSaveChanges from "../Buttons/ButtonSaveChanges"
import ButtonSaveDraft from "../Buttons/ButtonSaveDraft"

export default function FormInvoice({ isEditing }: { isEditing: boolean }) {
  //temporarily, before Redux
  const invoice = isEditing ? data[0] : newInvoice;

  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>({
    defaultValues: {
      senderStreetAddress: invoice.senderAddress.street,
      senderCity: invoice.senderAddress.city,
      senderPostCode: invoice.senderAddress.postCode,
      senderCountry: invoice.senderAddress.country
    },
  })

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data)

  return (
    <form className="flex flex-col justify-start items-center w-full m-auto" onSubmit={handleSubmit(onSubmit)}>
      <FormSection marginTop={6}>
        <FormHeader header="Bill From" />
        {billFromData.map((field) => (
          <div key={field.id} className={`text-left flex flex-col w-full col-span-${field.gridCols}`}>
            <label className="text-secondary">{field.label}</label>
            <input
              {...register(field.name, {
                required: field.required,
              })}
              className={`border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500 col-span-${field.gridCols}}`}
              type={field.type}
            />
            {errors[field.name] && (
              <span>This field is required</span>
            )}
          </div>
        ))}
      </FormSection>
      <Footer>
        {isEditing
          ? <>
            <ButtonCancel name="Cancel" />
            <ButtonSaveChanges name="Save Changes" />
          </>
          : <>
            <ButtonCancel name="Discard" />
            <ButtonSaveDraft />
            <ButtonSaveChanges name="Save & Send" />
          </>}
      </Footer>
    </form>
  )
}
