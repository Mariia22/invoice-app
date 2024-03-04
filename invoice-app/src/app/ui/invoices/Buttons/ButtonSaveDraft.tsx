"use client"

import Button from "../../shared/Button"

export default function ButtonSaveDraft() {
  function saveDraft() {
    console.log("Saved as Draft")
  }

  return (
    <Button
      style="bg-draftColor text-secondaryDark dark:secondaryPale"
      onClick={saveDraft}
      text="Save as Draft" />
  )
}
