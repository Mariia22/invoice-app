"use client"

import { Status } from "@/app/lib/types"
import Button from "../../shared/Button"

export default function ButtonSaveDraft() {
  return (
    <Button
      type="submit"
      name={Status.Draft}
      style="bg-draftColor text-secondaryDark"
      text="Save as Draft" />
  )
}
