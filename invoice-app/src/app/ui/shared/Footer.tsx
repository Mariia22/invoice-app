export default function Footer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center bg-text dark:bg-cardColor px-5 py-5 w-full md:hidden">{children}</div>)
}
