"use client"

import { useRouter } from "next/navigation"

export default function ButtonEdit({ id }: { id: string }) {
  const router = useRouter();

  return (<button className={`bg-tableColor text-secondary py-3 px-5 mx-2 rounded-3xl font-bold`} onClick={() => router.push(`/invoices/${id}/edit`)}>Edit</button>)
}
