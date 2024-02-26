"use client"

import { useRouter } from "next/navigation"

export default function ButtonEdit({ id }: { id: string }) {
  const router = useRouter();

  return (<button className={`bg-tableColor text-secondary text-sm py-3 px-4 mx-2 rounded-3xl font-bold`} onClick={() => router.push(`/invoices/${id}/edit`)}>Edit</button>)
}
