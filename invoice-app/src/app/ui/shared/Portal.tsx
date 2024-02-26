'use client'

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const element = document.getElementById("modal-root") as Element

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  return mounted
    ? createPortal(<dialog className="fixed left-0 top-0 w-full h-full flex items-center bg-black bg-opacity-50 z-10 overflow-hidden">{children}</dialog>, element)
    : null
};
