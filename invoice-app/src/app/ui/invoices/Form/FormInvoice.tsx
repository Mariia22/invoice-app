'use client'

import { FormInput, Invoice } from "@/app/lib/types"
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import { billFromData, billToData, defaultFormValues } from "./formData"
import FormSection from "./FormSection"
import FormHeader from "./FormHeader"
import Footer from "../../shared/Footer"
import ButtonCancel from "../Buttons/ButtonCancel"
import ButtonSaveChanges from "../Buttons/ButtonSaveChanges"
import ButtonSaveDraft from "../Buttons/ButtonSaveDraft"
import FormFields from "./FormFields"
import FormItemFields from "./FormItemFields"
import FormPaymentSection from "./FormPaymentSection"

type FormInvoice = {
  isEditing: boolean;
  invoice?: Invoice
}

export default function FormInvoice({ isEditing, invoice }: FormInvoice) {
  const { register, handleSubmit, formState: { errors }, control, setValue, getValues } = useForm<FormInput>({ defaultValues: defaultFormValues(invoice) })
  const { fields, append, remove } = useFieldArray({ control, name: "items" });
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data)

  function addNewItem() {
    append({ name: "", quantity: 0, price: 0, total: 0 })
  }

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
      <FormPaymentSection register={register} isEditing={isEditing} />
      <FormSection marginTop={16}>
        <h3 className="font-bold text-lg text-secondaryDark">Item List</h3>
        <FormItemFields fields={fields} getValues={getValues} register={register} errors={errors} remove={remove} setValue={setValue} />
        <button type="button" className="text-base bg-tableColor dark:bg-headerBackground text-secondary dark:text-secondaryDark w-[327px] h-[48px] rounded-3xl mt-12 mb-[88px] place-self-center col-span-6" onClick={addNewItem}>+ Add New Item</button>
      </FormSection >
      <div className="w-full h-[64px] bg-gradient-to-t from-blackShadow dark:bg-none to-text" />
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
    </form >
  )
}
