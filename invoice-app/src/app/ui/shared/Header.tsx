import ThemeSwitch from "./ThemeSwitch";
import Avatar from "./Avatar";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between bg-headerBackground xl:flex-col xl:rounded-r-[30px] xl:min-h-dvh">
      < Logo />
      <div className="flex items-center xl:flex-col xl:gap-8 xl:justify-center">
        <ThemeSwitch />
        <Avatar />
      </div>
    </header>
  )
}
