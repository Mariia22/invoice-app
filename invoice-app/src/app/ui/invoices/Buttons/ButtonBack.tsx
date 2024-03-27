"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type ButtonBackProps = {
  url: string
}

export default function ButtonBack({ url }: ButtonBackProps) {
  const router = useRouter()
  return (
    <div className="flex item-center w-[100px] h-[20px] hover:cursor-pointer" onClick={() => router.push(url)}>
      <Image src="/assets/icon-arrow-left.svg" width={7} height={10} alt="arrow left" style={{
        width: '7px',
        height: '10px',
        alignSelf: 'center'
      }} />
      <p className="font-bold text-base ml-6">Go back</p>
    </div>
  )
}
