"use client"

import Button from "../../shared/Button"

type ButtonPaidProps = {
  disabled?: boolean
  handleClick: () => Promise<void>
}

export default function ButtonPaid({ disabled, handleClick }: ButtonPaidProps) {

  return (
    <form action={handleClick}>
      <Button
        style="bg-primary text-text hover:bg-primaryPale md:py-4 md:px-6 md:h-12"
        type="submit"
        disabled={disabled}
        text="Mark as Paid" />
    </form>
  )

}
