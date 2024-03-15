"use client";

import { useRouter } from "next/navigation"
import Button from "../../shared/Button";

export default function ButtonCancel({ name }: { name: string }) {
  const router = useRouter()

  function cancel() {
    router.back()
  }

  return (
    <Button
      style="bg-tableColor dark:bg-headerBackground text-secondary dark:text-secondaryPale px-6 py-4"
      onClick={cancel}
      text={name} />
  )
}
