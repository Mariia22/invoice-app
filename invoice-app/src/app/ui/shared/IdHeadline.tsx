export default function IdHeadline({ id }: { id: string }) {
  return (<span className="font-bold text-headerText"><span className="text-secondary">#</span>{id}</span>)
}
