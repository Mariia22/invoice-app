import { FormInput, Item } from "@/app/lib/types";
import { Fragment } from "react";
import { FieldArrayWithId, FieldErrors, UseFieldArrayRemove, UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";

export default function FormItemFields({ fields, register, errors, remove, setValue, getValues }: { fields: FieldArrayWithId<FormInput, "items", "id">[], register: UseFormRegister<FormInput>, errors: FieldErrors<FormInput>, remove: UseFieldArrayRemove, setValue: UseFormSetValue<FormInput>, getValues: UseFormGetValues<FormInput> }) {

  const setTotal = (index: number, quantity: string, price: number) => {
    const amount = Number(Number(quantity) * Number(price));
    if(isNaN(amount)) {
      setValue(`items.${index}.total`, 0);
    } else {
    setValue(`items.${index}.total`, Number(amount.toFixed(2)));
    }
  };

  return (
    <>
      {
        fields.map((field: Item, index: number) => (
          <Fragment key={index}>
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
    </>
  )
}
