import { FormField, FormInput } from "@/app/lib/types";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export default function FormFields({ data, register, errors }: { data: FormField[], register: UseFormRegister<FormInput>, errors: FieldErrors<FormInput> }) {
  return (
    <>
      {
        data.map((field) => (
          <div key={field.id} className={`text-left flex flex-col w-full col-span-${field.gridCols}`}>
            <label className="field-label">{field.label}</label>
            <input
              {...register(field.name, {
                required: `The field is required`,
              })}
              className={`border border-secondaryPale dark:border-headerBackground text-headerText dark:text-text dark:bg-cardColor text-sm font-bold max-w-full w-full outline-none rounded m-0 py-3 px-4 col-span-${field.gridCols}`}
              type={field.type}
            />
            {errors[field.name] && (
              <p>{errors[field.name]?.message}</p>
            )}
          </div>
        ))
      }
    </>
  )
}
