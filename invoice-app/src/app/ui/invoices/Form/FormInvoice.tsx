'use client'

import { FormInput } from "@/app/lib/types"
import { SubmitHandler, useForm } from "react-hook-form"
import data from "../../../data.json"
import { billFromData, billToData, defaultFormValues, invoiceData, itemList, newInvoice } from "./formData"
import FormSection from "./FormSection"
import FormHeader from "./FormHeader"
import Footer from "../../shared/Footer"
import ButtonCancel from "../Buttons/ButtonCancel"
import ButtonSaveChanges from "../Buttons/ButtonSaveChanges"
import ButtonSaveDraft from "../Buttons/ButtonSaveDraft"
import FormFields from "./FormFields"

export default function FormInvoice({ isEditing }: { isEditing: boolean }) {
  //temporarily, before Redux
  const invoice = isEditing ? data[1] : newInvoice;

  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>({ defaultValues: defaultFormValues(invoice) })

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data)

  return (
    <form className="flex flex-col justify-start items-center w-full m-auto" onSubmit={handleSubmit(onSubmit)}>
      <FormSection marginTop={6}>
        <FormHeader header="Bill From" />
        <FormFields data={billFromData} register={register} errors={errors} />
      </FormSection>
      <FormSection marginTop={6}>
        <FormHeader header="Bill To" />
        <FormFields data={billToData} register={register} errors={errors} />
      </FormSection>
      <FormSection marginTop={10}>
        <FormFields data={invoiceData} register={register} errors={errors} />
      </FormSection>
      <FormSection marginTop={11}>
        <h3>Item List</h3>
        {invoice.items.map(invoice => (<FormFields data={itemList} register={register} errors={errors} />))}
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
