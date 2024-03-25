import Avatar from "./Avatar";
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";

export default function HeaderContent() {
  return (
    <>
      <Logo />
      <div className="flex items-center xl:flex-col xl:gap-8 xl:justify-center">
        <ThemeSwitch />
        <Avatar />
      </div>
    </>
  )
}
