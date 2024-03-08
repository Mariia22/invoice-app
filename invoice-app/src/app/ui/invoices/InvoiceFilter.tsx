"use client";

import Image from "next/image";
import { useReducer, useState } from "react";
import Checkbox from "../shared/Checkbox";

export default function InvoiceFilter() {
  const [isFilterOpened, setFilterOpened] = useState(false);
  const [state, dispatch] = useReducer(reducer, { draft: false, pending: false, paid: false })
  const arrow = isFilterOpened ? "rotate-180" : "rotate-0";

  function reducer(state: { draft: boolean, pending: boolean, paid: boolean }, action: { type: string; }) {
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
          draft: !state.pending
        }
      }
      case 'change_paid': {
        return {
          ...state,
          draft: !state.paid
        }
      }
      default: throw Error('Unknown action.' + action.type);
    }
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
      {isFilterOpened && (<div className="absolute top-10 inset-x-0 flex flex-col w-[192px] h-[128px] bg-text shadow-modal rounded-lg px-6 py-6">
        <Checkbox label="Draft" value={state.draft} onChange={() => dispatch({ type: 'change_draft' })} />
        <Checkbox label="Pending" value={state.pending} onChange={() => dispatch({ type: 'change_pending' })} />
        <Checkbox label="Paid" value={state.paid} onChange={() => dispatch({ type: 'change_paid' })} />
      </div>)}
    </div>
  )
}
