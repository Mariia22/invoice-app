import { ChangeEvent } from "react";

type CheckboxProps = {
  id: string;
  checked: boolean;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Checkbox({ id, checked, name, onChange }: CheckboxProps) {
  return (
    <div className="w-full flex gap-2">
      <input type="checkbox" id={id} name={name} checked={checked} onChange={onChange} className="relative peer shrink-0 appearance-none w-4 h-4 border-2 border-primary rounded-sm bg-secondaryPale dark:bg-cardColor mt-1 checked:bg-primary dark:checked:bg-primary checked:border-0 outline-none focus:outline-none" />
      <svg className="absolute w-4 h-4 mt-1 hidden peer-checked:block pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 9"
        fill="none"
        stroke="currentColor"
        stroke-width="4">
        <path d="M1.5 4.49976L3.62425 6.62402L8.96995 1.27832" stroke="white" strokeWidth="2" />
      </svg>
      <label htmlFor={id} className="font-bold cursor-pointer">{name}</label>
    </div>
  );
}
