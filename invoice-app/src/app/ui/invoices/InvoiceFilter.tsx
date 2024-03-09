"use client";

import Image from "next/image";
import { ChangeEvent, useEffect, useReducer, useState } from "react";
import Checkbox from "../shared/Checkbox";
import { FilterCheckbox } from "@/app/lib/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function InvoiceFilter() {
  const status = ["Draft", "Pending", "Paid"]
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [isFilterOpened, setFilterOpened] = useState(false);
  const [state, dispatch] = useReducer(reducer, { draft: false, pending: false, paid: false })
  const arrow = isFilterOpened ? "rotate-180" : "rotate-0";

  function reducer(state: FilterCheckbox, action: { type: string; }) {
    switch (action.type) {
      case 'change_draft': {
        return {
          ...state,
          draft: !state.draft
        }
      }
      case 'change_pending': {
        return {
          ...state,
          pending: !state.pending
        }
      }
      case 'change_paid': {
        return {
          ...state,
          paid: !state.paid
        }
      }
      default: throw Error('Unknown action.' + action.type);
    }
  }

  function handleCheck(checked: boolean, term: string): void {
    const params = new URLSearchParams(searchParams);
    const arg = params.get('keywords');
    if (checked && !params.has('keywords')) {
      params.set('keywords', ','.concat(term, ','))
    } else if (checked && params.has('keywords')) {
      if (arg) {
        params.set('keywords', arg.concat(',', term, ','));
      }
    } else {
      if (arg) {
        params.set('keywords', arg.replace(','.concat(term, ','), ''));
      }
    }
    replace(`${pathname}?${params.toString()}`);

  }

  function openFilterModal() {
    setFilterOpened(!isFilterOpened)
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-4 cursor-pointer" onClick={openFilterModal}>
        <p className="md:hidden">Filter</p>
        <p className="hidden md:inline-block">Filter by status</p>
        <Image width={11} height={7} src="/assets/icon-arrow-down.svg" alt="Filter Button" className={`${arrow}`} />
      </div>
      {isFilterOpened && (<div className="absolute top-10 -left-5 flex flex-col gap-2 w-[192px] h-[128px] bg-text shadow-modal rounded-lg px-6 py-6">
        <Checkbox label="Draft" id={status[0]} onChange={(e) => handleCheck(e.target.checked, status[0])} defaultValue={searchParams.get('keywords')?.includes(status[0])} />
        <Checkbox label="Pending" id={status[1]} onChange={(e) => handleCheck(e.target.checked, status[1])} defaultValue={searchParams.get('keywords')?.includes(status[1])} />
        <Checkbox label="Paid" id={status[2]} onChange={(e) => handleCheck(e.target.checked, status[2])} defaultValue={searchParams.get('keywords')?.includes(status[2])} />
      </div>)}
    </div>
  )
}
