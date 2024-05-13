'use client'

import { FormInput, Invoice, ModalFormType } from "@/app/lib/types"
import { useFieldArray, useForm } from "react-hook-form"
import { billFromData, billToData, defaultFormValues } from "./formData"
import FormSection from "./FormSection"
import FormHeader from "./FormHeader"
import ButtonCancel from "../Buttons/ButtonCancel"
import ButtonSaveChanges from "../Buttons/ButtonSaveChanges"
import ButtonSaveDraft from "../Buttons/ButtonSaveDraft"
import FormFields from "./FormFields"
import FormItemFields from "./FormItemFields"
import FormPaymentSection from "./FormPaymentSection"
import { createNewInvoice, editInvoice } from "@/app/lib/actions"
import { useContext, useState } from "react"
import { FormWindow } from "@/app/providers"
import { useRouter } from "next/navigation"
import { invoiceFormSchema } from "./formValidation"
import { zodResolver } from "@hookform/resolvers/zod";

type FormInvoice = {
  isEditing: boolean;
  invoice?: Invoice;
  isModal: boolean;
  url?: string;
  id?: string;
}

export default function FormInvoice({ isEditing, invoice, isModal, url, id }: FormInvoice) {
  const router = useRouter()
  const { setFormModal } = useContext(FormWindow) as ModalFormType;
  const { register, handleSubmit, formState: { errors, isSubmitting }, control, setValue, getValues } = useForm<FormInput>({ defaultValues: defaultFormValues(invoice), resolver: zodResolver(invoiceFormSchema) })
  const { fields, append, remove } = useFieldArray({ control, name: "items" });
  const [error, setError] = useState<null|string>(null)

  const onMyFormSubmit = async (data: FormInput, event:any) => {
    if(data.items.length <= 0){
      setError("Please, add items to the invoice")
    } else {
    setError(null)
    try{
    !isEditing
      ? await createNewInvoice(data, event.nativeEvent.submitter.name)
      : await editInvoice(data, id)
    isModal ? setFormModal(false) : router.push(url ? url : "/")
    } catch (error:any){
      console.log(error)
    }
  }
  }

  function addNewItem() {
    setError(null)
    append({ name: "", quantity: 0, price: 0, total: 0 })
  }

  return (
    <form className="flex flex-col justify-start items-center w-full m-auto bg-text dark:bg-darkText md:m-0" onSubmit={handleSubmit((data, event) => onMyFormSubmit(data, event))}>
      <FormSection marginTop={6}>
        <FormHeader header="Bill From" />
        <FormFields data={billFromData} register={register} errors={errors} />
      </FormSection>
      <FormSection marginTop={6}>
        <FormHeader header="Bill To" />
        <FormFields data={billToData} register={register} errors={errors} />
      </FormSection>
      <FormPaymentSection register={register} isEditing={isEditing} errors={errors}/>
      <div className="grid grid-cols-7 col-span-3 gap-4 mt-16 px-6 w-full md:px-8 md:grid-cols-10 xl:px-14">
        <h3 className="font-bold text-lg text-secondaryDark col-span-6 justify-self-start md:col-span-10">Item List</h3>
        <FormItemFields fields={fields} getValues={getValues} register={register} errors={errors} remove={remove} setValue={setValue} />
        <button type="button" className="text-base bg-tableColor dark:bg-headerBackground text-secondary dark:text-secondaryDark w-full h-[48px] rounded-3xl mt-12 mb-[88px] place-self-center col-span-6 md:col-span-10 md:mb-12" onClick={addNewItem}>+ Add New Item</button>
      </div >
      {error && <p className="text-contrast">{error}</p>}
      <div className="w-full h-[64px] bg-gradient-to-t from-blackShadow dark:bg-none to-text xl:hidden" />
      {isEditing
        ? <div className="w-full flex items-center justify-center bg-text dark:bg-cardColor px-3 py-5 md:justify-end md:pr-14 md:rounded-r-xl xl:py-8">
          <ButtonCancel url={`/invoices/${invoice?.id}`} name="Cancel" isSubmitting={isSubmitting} />
          <ButtonSaveChanges name="Save Changes" isSubmitting={isSubmitting} />
        </div>
        : <div className="w-full flex items-center justify-center bg-text dark:bg-cardColor px-3 p-5 md:justify-between xl:py-8">
          <ButtonCancel url="/" name="Discard" isSubmitting={isSubmitting} />
          <div className="flex items-center justify-center md:px-14">
            <ButtonSaveDraft isSubmitting={isSubmitting} />
            <ButtonSaveChanges name="Save & Send" isSubmitting={isSubmitting} />
          </div>
        </div>}
      <div className="hidden md:block w-full h-[80px] bg-text dark:bg-cardColor xl:hidden" />
    </form >
  )
}
