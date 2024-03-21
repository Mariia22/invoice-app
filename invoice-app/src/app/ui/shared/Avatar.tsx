import Image from "next/image";

export default function Avatar() {
  return (
    <div className="flex items-center justify-center h-[4.5rem] w-[4.5rem] border-l border-borderColor md:h-[5rem] md:w-[6rem] xl:border-l-0 xl:border-t xl:w-[103px] xl:h-[88px]">
      <Image src="/assets/image-avatar.jpg" width={32} height={32} alt="Avatar" className="md:mx-8 md:my-6 rounded-full hover:cursor-pointer" />
    </div>)
}
