export default function IdHeadline({ id }: { id: string }) {
  return (<h2 className="font-bold text-headerText"><span className="text-secondary">#</span>{id}</h2>)
}
