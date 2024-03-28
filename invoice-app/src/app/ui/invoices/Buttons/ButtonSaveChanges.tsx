"use client"

import Button from "../../shared/Button"

export default function ButtonSaveChanges({ name }: { name: string }) {
  return (
    <Button
      style="bg-primary text-text hover:bg-primaryPale"
      type="submit"
      text={name} />
  )
}
