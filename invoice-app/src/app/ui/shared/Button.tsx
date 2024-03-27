"use client"

type ButtonProps = {
  text: string;
  style: string;
  type?: "submit" | "button"
  disabled?: boolean
  onClick?: () => void
}

export default function Button({ text, style, onClick, type, disabled }: ButtonProps) {
  return (<button type={type || "button"} className={`${style} text-sm py-3 px-4 mx-2 rounded-3xl font-bold disabled:opacity-50 disabled:pointer-events-none`} onClick={onClick} disabled={disabled || false}>{text}</button>)
}
