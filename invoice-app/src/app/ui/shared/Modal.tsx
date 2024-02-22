"use client";

import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";

export default function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  return (
    <>
      {modal && <dialog className="fixed left-0 top-0 w-full h-full flex items-center bg-black bg-opacity-50 z-10 overflow-auto">
        <div className="flex flex-col m-auto p-8 w-[327px] h-[220px] bg-text shadow-modal rounded-lg">
          <h3 className="mb-2 font-bold text-2xl">Confirm Deletion</h3>
          <p className="text-secondaryDark">Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>
          <div className="flex self-end gap-2 mt-5">
            <Link href={pathname}>
              <button type="button" className="bg-tableColor text-secondary py-3 px-5 rounded-3xl">Cancel</button>
            </Link>
            <Link href="/">
              <button type="button" className="bg-contrast text-text py-3 px-5 rounded-3xl">Delete</button>
            </Link>
          </div>
        </div>
      </dialog>
      }
    </>
  );
}
