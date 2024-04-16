"use client"

import { Status } from "@/app/lib/types"
import Button from "../../shared/Button"
import { useState } from "react";

export default function ButtonSaveDraft({ isSubmitting }: { isSubmitting: boolean }) {
  const [isClicking, setIsClicking] = useState(false);

  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      name={Status.Draft}
      style="bg-draftColor text-secondaryDark"
      text={isSubmitting && isClicking ? "Submitting" : "Save as Draft"}
      onClick={() => { setIsClicking(true) }} />
  )
}
