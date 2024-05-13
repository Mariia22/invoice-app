"use client"

import { FormInput, Status } from "@/app/lib/types"
import Button from "../../shared/Button"
import { useState } from "react";

type ButtonProps = {
  isSubmitting: boolean,
  onClick: () => void
}

export default function ButtonSaveDraft({ isSubmitting, onClick }: ButtonProps) {
  const [isClicking, setIsClicking] = useState(false);

  function handleClick(){
    setIsClicking(true)
    onClick()
  }

  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      name={Status.Draft}
      style="bg-draftColor text-secondaryDark"
      text={isSubmitting && isClicking ? "Submitting" : "Save as Draft"}
      onClick={handleClick} />
  )
}
