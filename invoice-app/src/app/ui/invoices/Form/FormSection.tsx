export default function FormSection({ children, marginTop }: { children: React.ReactNode, marginTop: number }) {
  return (<section className={`grid gap-3 mt-${marginTop} mx-6`}>{children}</section>)
}
