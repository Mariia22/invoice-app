import { ChangeEvent } from "react";

type CheckboxProps = {
  checked: boolean
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Checkbox({ checked, name, onChange }: CheckboxProps) {
  return (
    <label className="font-bold cursor-pointer">
      <input type="checkbox" name={name} checked={checked} onChange={onChange} className="accent-primary focus:outline-none focus:border-2 focus:border-primary" />
      {name}
    </label>
  );
}
