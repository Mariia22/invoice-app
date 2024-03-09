import { ChangeEvent } from "react";

type CheckboxProps = {
  id: string
  defaultValue: boolean | undefined;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Checkbox({ id, defaultValue, label, onChange }: CheckboxProps) {
  return (
    <label className="font-bold cursor-pointer">
      <input type="checkbox" id={id} checked={defaultValue} onChange={onChange} className="accent-primary focus:outline-none focus:border-2 focus:border-primary" />
      {label}
    </label>
  );
}
