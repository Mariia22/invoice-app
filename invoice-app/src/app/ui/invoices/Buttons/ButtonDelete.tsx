"use client"

import Link from "next/link";

export default function ButtonDelete({ id }: { id: string }) {

  return (
    <Link href="?modal=true">
      <button className="bg-contrast text-text py-3 px-5 mx-2 rounded-3xl font-bold">Delete</button>
    </Link>
  )
}
