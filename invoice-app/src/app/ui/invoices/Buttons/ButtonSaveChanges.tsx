"use client"

import { Status } from "@/app/lib/types"
import Button from "../../shared/Button"

export default function ButtonSaveChanges({ name }: { name: string }) {
  return (
    <Button
      style="bg-primary text-text hover:bg-primaryPale"
      type="submit"
      name={Status.Pending}
      text={name} />
  )
}
