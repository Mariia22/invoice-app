export default function FormSection({ children, marginTop }: { children: React.ReactNode, marginTop: number }) {
  return (<section className={`grid mt-${marginTop} mx-6 gap-x-3 md:mx-0 md:grid-cols-3`}>{children}</section>)
}
