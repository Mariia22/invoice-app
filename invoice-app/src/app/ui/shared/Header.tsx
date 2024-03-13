import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import Avatar from "./Avatar";
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between bg-headerBackground">
      <Logo />
      <div className="flex items-center">
        <ThemeSwitch />
        <Avatar />
      </div>
    </header>
  )
}
