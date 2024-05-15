'use client'

import { FormInput, Invoice, Item, ModalFormType, Status } from "@/app/lib/types"
import { FieldErrors, useFieldArray, useForm } from "react-hook-form"
import { billFromData, billToData, defaultFormValues } from "./formData"
import FormSection from "./FormSection"
import FormHeader from "./FormHeader"
import ButtonCancel from "../Buttons/ButtonCancel"
import ButtonSaveChanges from "../Buttons/ButtonSaveChanges"
import ButtonSaveDraft from "../Buttons/ButtonSaveDraft"
import FormFields from "./FormFields"
import FormPaymentSection from "./FormPaymentSection"
import { createNewInvoice, editInvoice } from "@/app/lib/actions"
import { Fragment, useContext, useId, useState } from "react"
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
  const { register, handleSubmit, formState: { errors, isSubmitting }, control, setValue, getValues } = useForm<FormInput>({ 
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: defaultFormValues(invoice), 
    resolver: zodResolver(invoiceFormSchema) })
  const { fields, append, remove } = useFieldArray({ control, name: "items" });
  const [error, setError] = useState<null | string>(null)

  function closeForm () {
    isModal ? setFormModal(false) : router.push(url ? url : "/")
  }

async function onMyFormSubmit(data: FormInput) {
    if(data.items.length <= 0){
      setError("Please, add items to the invoice")
    } else {
    setError(null)
    try{
     
    if(isEditing) {
      await editInvoice(data, id)
    } else {
      await createNewInvoice(data, Status.Pending)
    }
      closeForm()
    } catch (error) {
      console.log(error)
    }
  }
  }

  function addNewItem() {
    setError(null)
    append({name: "", quantity: 0, price: 0, total: 0 })
  }

  async function saveDraft() {
    try {
      createNewInvoice(getValues(), Status.Draft)
      closeForm()
    } catch (error) {
      console.log(error)
    }
  }

 function onInvalid (errors:FieldErrors) {console.error(errors)}

 function setTotal (index: number, quantity: string, price: number | string) {
  const amount = Number(Number(quantity) * Number(price));
  if(isNaN(amount)) {
    setValue(`items.${index}.total`, 0);
  } else {
  setValue(`items.${index}.total`, Number(amount.toFixed(2)));
  }
};

  return (
    <form className="flex flex-col justify-start items-center w-full m-auto bg-text dark:bg-darkText md:m-0" onSubmit={handleSubmit((data) => onMyFormSubmit(data), onInvalid)}>
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
        {fields.map((field: Item, index: number) => (
          <Fragment key={field.key}>
            <div className="text-left col-span-7 md:col-span-3 w-full">
              <label className="field-label">Item Name</label>
              <input {...register(`items.${index}.name`, { required: "Name is required" })} type="text" className="field" />
              {errors.items?.[index]?.name && <p className="text-contrast">{errors.items?.[index]?.name?.message}</p>}
            </div>
            <div className="text-left col-span-2">
              <label className="field-label">Qty.</label>
              <input {...register(`items.${index}.quantity`, { required: "Quantity is required" })} type="number" step="1" min="1" className="field" onChange={(e) => { setTotal(index, e.target.value, getValues(`items.${index}.price`)) }} />
              {errors.items?.[index]?.quantity && <p className="text-contrast">{errors.items?.[index]?.quantity?.message}</p>}
            </div>
            <div className="text-left gap-4 w-full col-span-2">
              <label className="field-label">Price</label>
              <input {...register(`items.${index}.price`, { min: 0.01 })} type="number" className="field" onChange={(e) => { setTotal(index, e.target.value, getValues(`items.${index}.quantity`)) }} />
              {errors.items?.[index]?.price && <p className="text-contrast">{errors.items?.[index]?.price?.message}</p>}
            </div>
            <div className="text-left gap-4 w-full col-span-2">
              <label className="field-label">Total</label>
              <input {...register(`items.${index}.total`, { min: 0.01 })} type="text" disabled className="text-headerText dark:disabled:text-secondaryDark dark:disabled:bg-black text-sm font-bold max-w-full w-full outline-none rounded m-0 py-3 pl-4" />
            </div>
            <button type="button" className="w-[13px] h-4 col-span-1 bg-delete-button justify-self-end self-center mt-4" onClick={() => remove(index)} />
          </Fragment>
        ))
      }
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
            <ButtonSaveDraft isSubmitting={isSubmitting} onClick={saveDraft}/>
            <ButtonSaveChanges name="Save & Send" isSubmitting={isSubmitting}/>
          </div>
        </div>}
      <div className="hidden md:block w-full h-[80px] bg-text dark:bg-cardColor xl:hidden" />
    </form >
  )
}
