import { formatDate, formatPrice } from "@/app/lib/functions";
import data from "../../data.json";
import ButtonBack from "@/app/ui/invoices/Buttons/ButtonBack";
import InvoiceStatus from "@/app/ui/invoices/InvoiceStatus";
import { Invoice } from "@/app/lib/types";
import Subtitle from "@/app/ui/shared/Subtitle";
import ButtonEdit from "@/app/ui/invoices/Buttons/ButtonEdit";
import ButtonDelete from "@/app/ui/invoices/Buttons/ButtonDelete";
import ButtonPaid from "@/app/ui/invoices/Buttons/ButtonPaid";
import SubtitleBold from "@/app/ui/shared/SubtitleBold";
import Modal from "@/app/ui/shared/Modal";
import { Suspense } from "react";

export default function InvoicePage({ params }: { params: { id: string } }) {
  const invoice: Invoice | undefined = data.find(item => item.id === params.id)

  return (
    <>
      <div className="mt-8 mx-6 mb-6">
        <ButtonBack />
        {invoice && (
          <>
            <div className="flex items-center justify-between w-full px-6 py-6 mt-8 mb-4 bg-text rounded-md">
              <p>Status</p>
              <InvoiceStatus status={invoice.status} />
            </div>
            <div className="flex flex-col justify-between w-full px-6 py-6 mb-14 bg-text text-secondary rounded-md">
              <h2 className="font-bold text-headerText"><span className="text-secondary">#</span>{invoice.id}</h2>
              <p className="mb-8">{invoice.description}</p>
              <p>{invoice.senderAddress.street}</p>
              <p>{invoice.senderAddress.city}</p>
              <p>{invoice.senderAddress.postCode}</p>
              <p>{invoice.senderAddress.country}</p>
              <div className="flex justify-start mb-8">
                <div className="flex flex-col w-6/12">
                  <Subtitle subtitle="Invoice Date" />
                  <SubtitleBold subtitle={formatDate(invoice.createdAt)} />
                  <Subtitle subtitle="Payment Due" />
                  <SubtitleBold subtitle={formatDate(invoice.paymentDue)} />
                  <Subtitle subtitle="Sent to" />
                  <SubtitleBold subtitle={formatDate(invoice.clientEmail)} />
                </div>
                <div className="flex flex-col">
                  <Subtitle subtitle="Bill To" />
                  <SubtitleBold subtitle={formatDate(invoice.clientName)} />
                  <p className="mt-2">{invoice.clientAddress.street}</p>
                  <p>{invoice.clientAddress.city}</p>
                  <p>{invoice.clientAddress.postCode}</p>
                  <p>{invoice.clientAddress.country}</p>
                </div>
              </div>
              <div className="bg-tableColor px-6 pt-6 rounded-tl-lg rounded-tr-lg">
                {invoice.items.length > 0 && (invoice.items.map(item => (
                  <div className="flex items-center justify-between mb-6" key={item.name}>
                    <div>
                      <SubtitleBold subtitle={formatDate(item.name)} />
                      <p className="font-bold text-base text-secondary">{item.quantity} x {formatPrice(item.price)}</p>
                    </div>
                    <SubtitleBold subtitle={formatPrice(item.total)} />
                  </div>
                )))}
              </div>
              <div className="flex items-center justify-between bg-draftColor text-text px-6 py-6 rounded-bl-lg rounded-br-lg">
                <div>Grand Total</div>
                <div className="font-bold text-2xl">{formatPrice(invoice.total)}</div>
              </div>

            </div>
          </>
        )}
      </div>
      <div className="flex items-center justify-center bg-text px-5 py-5">
        <ButtonEdit id={params.id} />
        <ButtonDelete id={params.id} />
        <ButtonPaid id={params.id} />
      </div>
      <Suspense fallback={<>Loading...</>}>
        <Modal />
      </Suspense>
    </>
  )
}
