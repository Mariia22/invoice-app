import HeaderContent from "./HeaderContent";

export default function Header() {
  return (
    <header className="flex justify-between bg-headerBackground xl:flex-col xl:rounded-r-[30px] xl:min-h-dvh">
      <HeaderContent />
    </header>
  )
}
