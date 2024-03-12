import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import Avatar from "./Avatar";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between bg-headerBackground">
      <Link href="/">
        <Image src="/assets/logoColor.svg" width={80} height={80} alt="Logo" priority={true} className="object-contain h-auto hover:cursor-pointer md:h-[5rem]" />
      </Link>
      <div className="flex items-center">
        <ThemeSwitch />
        <Avatar />
      </div>
    </header>
  )
}
