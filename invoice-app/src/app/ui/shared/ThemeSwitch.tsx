'use client'

import { useTheme } from "next-themes"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  let src
  const [domLoaded, setDomLoaded] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  switch (resolvedTheme) {
    case 'light':
      src = '/assets/icon-sun.svg'
      break
    case 'dark':
      src = '/assets/icon-moon.svg'
      break
    default:
      src = 'data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=='
      break
  }

  function handleClick() {
    resolvedTheme === "light" ? setTheme('dark') : setTheme('light')
  }
  if (!domLoaded) return null

  return (
    <Image src={src} width={20} height={20} alt="light mode" priority={false} onClick={handleClick} className="mr-6 hover:cursor-pointer xl:mr-0" />
  )

}
