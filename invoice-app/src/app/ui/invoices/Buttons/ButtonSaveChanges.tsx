"use client"

import { Status } from "@/app/lib/types"
import Button from "../../shared/Button"
import { useState } from "react";

export default function ButtonSaveChanges({ name, isSubmitting }: { name: string; isSubmitting: boolean }) {
  const [isClicking, setIsClicking] = useState(false);

  return (
    <Button
      style="bg-primary text-text hover:bg-primaryPale"
      type="submit"
      disabled={isSubmitting}
      name={Status.Pending}
      text={isClicking && isSubmitting ? "Submitting" : name}
      onClick={() => { setIsClicking(true) }} />
  )
}
