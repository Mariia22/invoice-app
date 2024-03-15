export default function FormSection({ children, marginTop }: { children: React.ReactNode, marginTop: number }) {
  return (<section className={`grid mt-${marginTop} mx-6 gap-x-3 gap-y-6 grid-cols-2 md:px-8 md:grid-cols-3 md:mt-11`}>{children}</section>)
}
