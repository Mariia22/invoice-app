"use client";

import Image from "next/image";
import { ChangeEvent, useOptimistic, useState, useTransition } from "react";
import Checkbox from "../shared/Checkbox";
import { useRouter } from "next/navigation";
import { STATUS } from "@/app/lib/const";

export default function InvoiceFilter({ statuses }: { statuses: string[] }) {
  let router = useRouter();
  let [isPending, startTransition] = useTransition();
  let [optimisticStatus, setOptimisticStatus] = useOptimistic(statuses);
  const [isFilterOpened, setFilterOpened] = useState(false);
  const [delayHandler, setDelayHandler] = useState(0)
  const arrow = isFilterOpened ? "rotate-180" : "rotate-0";

  function handleCheck(e: ChangeEvent<HTMLInputElement>): void {
    let { name, checked } = e.target;
    let newStatus = checked
      ? [...optimisticStatus, name]
      : optimisticStatus.filter((optStatus) => optStatus !== name);

    let newParams = new URLSearchParams(
      newStatus.sort().map((status) => ["status", status])
    );

    startTransition(() => {
      setOptimisticStatus(newStatus.sort());
      router.push(`?${newParams}`);
    })
  }

  function openFilterModal() {
    stopTimerAndOpenCart()
  }

  const closeFilterModal = () => {
    setDelayHandler(
      window.setTimeout(() => {
        setFilterOpened(false)
      }, 500)
    )
  }

  const stopTimerAndOpenCart = () => {
    clearTimeout(delayHandler)
    setFilterOpened(true)
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-4 cursor-pointer" onMouseEnter={openFilterModal} onMouseLeave={closeFilterModal} onTouchStart={openFilterModal} onTouchEnd={closeFilterModal}>
        <p className="md:hidden">Filter</p>
        <p className="hidden md:inline-block">Filter by status</p>
        <Image width={11} height={7} src="/assets/icon-arrow-down.svg" alt="Filter Button" className={`${arrow}`} />
      </div>
      {isFilterOpened &&
        (<div data-pending={isPending ? "" : undefined} className="absolute top-10 -left-5 flex flex-col gap-2 w-[192px] h-[128px] bg-text shadow-modal rounded-lg px-6 py-6" onMouseEnter={openFilterModal} onMouseLeave={closeFilterModal} onTouchStart={openFilterModal} onTouchEnd={closeFilterModal}>
          {STATUS.map(status => (<Checkbox key={status} name={status} checked={optimisticStatus.includes(status)} onChange={(e) => handleCheck(e)} />))}
        </div>
        )}
    </div>
  )
}
