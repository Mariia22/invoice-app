"use client"

import { FormInput, Status } from "@/app/lib/types"
import Button from "../../shared/Button"
import { useState } from "react";
import { buttonNames } from "@/app/lib/const";

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
      type="button"
      disabled={isSubmitting}
      name={Status.Draft}
      style="bg-draftColor text-secondaryDark"
      text={isSubmitting && isClicking ? buttonNames.submitting : buttonNames.saveDraft}
      onClick={handleClick} />
  )
}
