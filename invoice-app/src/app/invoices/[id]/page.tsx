import { formatDate, formatPrice } from "@/app/lib/functions";
import ButtonBack from "@/app/ui/invoices/Buttons/ButtonBack";
import InvoiceStatus from "@/app/ui/invoices/InvoiceStatus";
import Subtitle from "@/app/ui/shared/Subtitle";
import ButtonEdit from "@/app/ui/invoices/Buttons/ButtonEdit";
import ButtonDelete from "@/app/ui/invoices/Buttons/ButtonDelete";
import ButtonPaid from "@/app/ui/invoices/Buttons/ButtonPaid";
import SubtitleBold from "@/app/ui/shared/SubtitleBold";
import IdHeadline from "@/app/ui/shared/IdHeadline";
import Footer from "@/app/ui/shared/Footer";
import { getInvoiceById } from "@/app/lib/db";
import { Status } from "@/app/lib/types";
import ModalDeleteInvoice from "@/app/ui/invoices/Modal/ModalDeleteInvoice";
import PortalWrapper from "@/app/ui/invoices/Modal/PortalWrapper";
import ButtonEditModalWindow from "@/app/ui/invoices/Buttons/ButtonEditModalWindow";
import ModalEditInvoice from "@/app/ui/invoices/Modal/ModalEditInvoice";
import PortalFormWrapper from "@/app/ui/invoices/Modal/PortalFormWrapper";
import { deleteInvoice, setPaidStatusToInvoice } from "@/app/lib/actions";

export default async function InvoicePage({ params }: { params: { id: string } }) {
  const invoice = await getInvoiceById(params.id)
  const handleClickPaidButtonWithId = setPaidStatusToInvoice.bind(null, params.id);
  const handleDeleteInvoiceWithId = deleteInvoice.bind(null, params.id);

  if (!invoice) {
    return (<div>Invoice is not found</div>)
  }

  return (
    <>
      <div className="py-8 px-6 bg-background text-darkText dark:bg-darkText dark:text-background">
        <ButtonBack url="/" />
        <>
          <div className="flex items-center justify-between w-full px-6 py-6 mt-8 mb-4 bg-text dark:bg-cardColor rounded-md shadow-modal">
            <div className="flex items-center justify-between w-full md:justify-start md:w-fit md:gap-5">
              <p>Status</p>
              <InvoiceStatus status={Status[invoice.status]} withArrow={false} />
            </div>
            <div className="hidden md:flex md:h-12">
              <ButtonEditModalWindow />
              <ButtonDelete />
              <ButtonPaid disabled={Status[invoice.status] === Status.Paid} handleClick={handleClickPaidButtonWithId} />
            </div>
          </div>
          <div className="flex flex-col justify-between w-full p-6 mb-14 bg-text dark:bg-cardColor text-sm text-secondary dark:text-secondaryPale rounded-md shadow-modal md:p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:w-full">
              <div className="flex flex-col">
                <IdHeadline id={invoice.id}></IdHeadline>
                <p className="mb-8">{invoice.description}</p>
              </div>
              <div className="flex flex-col">
                <p>{invoice.senderAddress.street}</p>
                <p>{invoice.senderAddress.city}</p>
                <p>{invoice.senderAddress.postcode}</p>
                <p>{invoice.senderAddress.country}</p>
              </div>
            </div>
            <div className="flex justify-start mb-8 md:grid md:grid-cols-3">
              <div className="flex flex-col w-6/12">
                <Subtitle subtitle="Invoice Date" />
                <SubtitleBold subtitle={formatDate(invoice.createdAt)} />
                <Subtitle subtitle="Payment Due" />
                <SubtitleBold subtitle={formatDate(invoice.paymentDue)} />
                <div className="md:hidden">
                  <Subtitle subtitle="Sent to" />
                  <SubtitleBold subtitle={invoice.client.clientEmail} />
                </div>
              </div>
              <div className="flex flex-col">
                <Subtitle subtitle="Bill To" />
                <SubtitleBold subtitle={invoice.client.clientName} />
                <p className="mt-2">{invoice.client.clientAddress.street}</p>
                <p>{invoice.client.clientAddress.city}</p>
                <p>{invoice.client.clientAddress.postcode}</p>
                <p>{invoice.client.clientAddress.country}</p>
              </div>
              <div className="hidden md:block">
                <Subtitle subtitle="Sent to" />
                <SubtitleBold subtitle={invoice.client.clientEmail} />
              </div>
            </div>
            <div className="bg-tableColor dark:bg-headerBackground px-6 pt-6 rounded-tl-lg rounded-tr-lg">
              {invoice.item.length > 0 && (invoice.item.map(item => (
                <div className="flex items-center justify-between mb-6" key={item.name}>
                  <div>
                    <SubtitleBold subtitle={item.name} />
                    <p className="font-bold text-base text-secondary dark:text-secondaryDark">{item.quantity} x {formatPrice(item.price)}</p>
                  </div>
                  <SubtitleBold subtitle={formatPrice(item.total)} />
                </div>
              )))}
            </div>
            <div className="flex items-center justify-between bg-draftColor dark:bg-headerText text-text px-6 py-6 rounded-bl-lg rounded-br-lg">
              <div className="md:hidden">Grand Total</div>
              <div className="hidden md:inline">Amount Due</div>
              <div className="font-bold text-2xl">{formatPrice(invoice.total)}</div>
            </div>

          </div>
        </>
      </div>
      <Footer>
        <ButtonEdit id={params.id} />
        <ButtonDelete />
        <ButtonPaid disabled={Status[invoice.status] === Status.Paid} handleClick={handleClickPaidButtonWithId} />
      </Footer>
      <PortalWrapper>
        <ModalDeleteInvoice id={params.id} handleClick={handleDeleteInvoiceWithId} />
      </PortalWrapper>
      <PortalFormWrapper>
        <ModalEditInvoice id={params.id} invoice={invoice} isEditing={true} />
      </PortalFormWrapper>
    </>
  )
}
