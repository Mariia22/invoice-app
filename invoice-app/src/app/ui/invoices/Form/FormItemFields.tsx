import { FormField, FormInput, Item } from "@/app/lib/types";
import { FieldArrayWithId, FieldErrors, UseFieldArrayRemove, UseFormRegister } from "react-hook-form";

export default function FormItemFields({ fields, register, errors, remove }: { fields: FieldArrayWithId<FormInput, "items", "id">[], register: UseFormRegister<FormInput>, errors: FieldErrors<FormInput>, remove: UseFieldArrayRemove }) {
  return (
    <>
      {
        fields.map((field: Item, index: number) => (
          <div key={index} className="text-left flex flex-col gap-4 w-full col-span-6">
            <label className="field-label">Item Name</label>
            <input {...register(`items.${index}.name`)} type="text" className="field" />
            {errors.items?.[index]?.name && (<span>This field is required</span>)}
            <div className="text-left flex items-end justify-center gap-4 w-full col-span-6">
              <div className="text-left flex flex-col gap-4 w-full col-span-1">
                <label className="field-label">Qty.</label>
                <input {...register(`items.${index}.quantity`)} type="text" className="field" />
                {errors.items?.[index]?.quantity && (<span>This field is required</span>)}
              </div>
              <div className="text-left flex flex-col gap-4 w-full col-span-2">
                <label className="field-label">Price</label>
                <input {...register(`items.${index}.price`)} type="text" className="field" />
                {errors.items?.[index]?.price && (<span>This field is required</span>)}
              </div>
              <div className="text-left flex flex-col gap-4 w-full col-span-2">
                <label className="field-label">Total</label>
                <input {...register(`items.${index}.total`)} type="text" disabled className=" text-headerText text-sm font-bold max-w-full w-full outline-none rounded m-0 py-3 px-4" />
                {errors.items?.[index]?.total && (<span>This field is required</span>)}
              </div>
              <button type="button" className="w-12 h-4 col-span-1 bg-delete-button" onClick={() => remove(index)} />
            </div>
          </div>

        ))
      }
    </>
  )
}
