import Image from "next/image";

export default function Avatar() {
  return (
    <div className="flex items-center justify-center h-18 w-18 border-l border-borderColor">
      <Image src="/assets/image-avatar.jpg" width={32} height={32} alt="Avatar" className="rounded-full" />
    </div>)
}
