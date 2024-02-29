"use client"

import Button from "../../shared/Button"

export default function ButtonSaveChanges({ name }: { name: string }) {
  return (
    <Button
      style="bg-primary text-text"
      type="submit"
      text={name} />
  )
}
