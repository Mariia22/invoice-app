type CheckboxProps = {
  value: boolean;
  label: string;
  onChange: () => void
}

export default function Checkbox({ value, label, onChange }: CheckboxProps) {
  return (
    <label className="font-bold cursor-pointer">
      <input type="checkbox" checked={value} onChange={onChange} className="accent-primary focus:outline-none focus:border-2 focus:border-primary" />
      {label}
    </label>
  );
}
