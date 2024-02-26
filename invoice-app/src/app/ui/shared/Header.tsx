import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import Avatar from "./Avatar";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between bg-headerBackground">
      <Link href="/">
        <Image src="/assets/logoColor.svg" width={72} height={72} alt="Logo" priority={true} className="hover:cursor-pointer" />
      </Link>
      <div className="flex items-center">
        <ThemeSwitch />
        <Avatar />
      </div>
    </header>
  )
}
