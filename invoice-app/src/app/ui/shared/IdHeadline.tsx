export default function IdHeadline({ id }: { id: string }) {
  return (<span className="font-bold text-headerText dark:text-text"><span className="text-secondary">#</span>{id}</span>)
}
