import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <header className="flex justify-between bg-headerBackground">
      <Image src="/assets/logoColor.svg" width={72} height={72} alt="Logo" />
      <div className="flex items-center">
        <ThemeSwitch />
        <Avatar />
      </div>
    </header>
  )
}
