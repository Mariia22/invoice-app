"use client"

import Button from "../../shared/Button"

export default function ButtonSaveChanges({ name, isEditing }: { name: string, isEditing: boolean }) {
  function saveChanges() {
    isEditing ? console.log("Saved") : console.log("Saved and Sent")
  }

  return (
    <Button
      style="bg-primary text-text"
      onClick={saveChanges}
      text={name} />
  )
}
