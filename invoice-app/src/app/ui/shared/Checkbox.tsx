type CheckboxProps = {
  value: boolean;
  label: string;
  onChange: () => void
}

export default function Checkbox({ value, label, onChange }: CheckboxProps) {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
}
