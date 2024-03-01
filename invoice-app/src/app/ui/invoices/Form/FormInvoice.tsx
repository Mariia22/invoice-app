'use client'

import { FormInput } from "@/app/lib/types"
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import data from "../../../data.json"
import { billFromData, billToData, defaultFormValues, invoiceData, newInvoice } from "./formData"
import FormSection from "./FormSection"
import FormHeader from "./FormHeader"
import Footer from "../../shared/Footer"
import ButtonCancel from "../Buttons/ButtonCancel"
import ButtonSaveChanges from "../Buttons/ButtonSaveChanges"
import ButtonSaveDraft from "../Buttons/ButtonSaveDraft"
import FormFields from "./FormFields"
import FormItemFields from "./FormItemFields"

export default function FormInvoice({ isEditing }: { isEditing: boolean }) {
  const invoice = isEditing ? data[1] : newInvoice;
  const { register, handleSubmit, formState: { errors }, control, setValue, getValues } = useForm<FormInput>({ defaultValues: defaultFormValues(invoice) })
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items"
  });
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
      <FormSection marginTop={10}>
        <FormFields data={invoiceData} register={register} errors={errors} />
      </FormSection>
      <FormSection marginTop={16}>
        <h3 className="font-bold text-lg text-secondaryDark">Item List</h3>
        <FormItemFields fields={fields} getValues={getValues} register={register} errors={errors} remove={remove} setValue={setValue} />
        <button type="button" className="text-base bg-tableColor text-secondary w-[327px] h-[48px] rounded-lg mt-12 mb-[88px] mx-auto" onClick={addNewItem}>+ Add New Button</button>
      </FormSection >
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
