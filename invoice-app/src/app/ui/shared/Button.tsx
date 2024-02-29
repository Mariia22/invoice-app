"use client"

type ButtonProps = {
  text: string;
  style: string;
  type?: "submit" | "button"
  onClick?: () => void
}

export default function Button({ text, style, onClick, type }: ButtonProps) {
  return (<button type={type || "button"} className={`${style} text-sm py-3 px-4 mx-2 rounded-3xl font-bold`} onClick={onClick}>{text}</button>)
}
