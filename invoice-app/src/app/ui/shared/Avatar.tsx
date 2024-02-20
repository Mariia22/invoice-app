import Image from "next/image";

export default function Avatar() {
  return (
    <div className="flex items-center justify-center h-[4.5rem] w-[4.5rem] border-l border-borderColor">
      <Image src="/assets/image-avatar.jpg" width={32} height={32} alt="Avatar" className="rounded-full hover:cursor-pointer" />
    </div>)
}
