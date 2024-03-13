'use client'

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children, classes }: { children: React.ReactNode, classes: string }) {
  const [mounted, setMounted] = useState(false)
  const element = document.getElementById("modal-root") as Element

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  return mounted
    ? createPortal(<dialog className={classes}>{children}</dialog>, element)
    : null
};
