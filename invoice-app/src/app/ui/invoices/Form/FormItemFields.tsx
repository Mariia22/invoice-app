import { FormInput, Item } from "@/app/lib/types";
import { FieldArrayWithId, FieldErrors, UseFieldArrayRemove, UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";

export default function FormItemFields({ fields, register, errors, remove, setValue, getValues }: { fields: FieldArrayWithId<FormInput, "items", "id">[], register: UseFormRegister<FormInput>, errors: FieldErrors<FormInput>, remove: UseFieldArrayRemove, setValue: UseFormSetValue<FormInput>, getValues: UseFormGetValues<FormInput> }) {

  const setTotal = (index: number, quantity: string, price: number) => {
    const amount = Number(quantity) * Number(price);
    setValue(`items.${index}.total`, amount);
  };

  return (
    <>
      {
        fields.map((field: Item, index: number) => (
          <div key={index} className="text-left flex flex-col gap-4 w-full col-span-6">
            <label className="field-label">Item Name</label>
            <input {...register(`items.${index}.name`, { required: "Name is required" })} type="text" className="field" />
            {errors.items?.[index]?.name && <p>{errors.items?.[index]?.name?.message}</p>}
            <div className="text-left flex items-end justify-center gap-4 w-full col-span-6">
              <div className="text-left flex flex-col gap-4 w-full col-span-1">
                <label className="field-label">Qty.</label>
                <input {...register(`items.${index}.quantity`, { required: "Quantity is required" })} type="text" className="field" onChange={(e) => { setTotal(index, e.target.value, getValues(`items.${index}.price`)) }} />
                {errors.items?.[index]?.quantity && <p>{errors.items?.[index]?.quantity?.message}</p>}
              </div>
              <div className="text-left flex flex-col gap-4 w-full col-span-2">
                <label className="field-label">Price</label>
                <input {...register(`items.${index}.price`, { required: "Price is required" })} type="text" className="field" onChange={(e) => { setTotal(index, e.target.value, getValues(`items.${index}.quantity`)) }} />
                {errors.items?.[index]?.price && <p>{errors.items?.[index]?.price?.message}</p>}
              </div>
              <div className="text-left flex flex-col gap-4 w-full col-span-2">
                <label className="field-label">Total</label>
                <input {...register(`items.${index}.total`)} type="text" disabled className=" text-headerText text-sm font-bold max-w-full w-full outline-none rounded m-0 py-3 px-4" />
              </div>
              <button type="button" className="w-12 h-4 col-span-1 bg-delete-button mb-4" onClick={() => remove(index)} />
            </div>
          </div>
        ))
      }
    </>
  )
}
