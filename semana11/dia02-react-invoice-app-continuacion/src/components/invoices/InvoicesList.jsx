import { formatNumber } from "../../utils"
import { TbChevronRight } from "react-icons/tb";
import BaseTag from "../shared/BaseTag";
import { useState } from "react";

const InvoicesList = ({ invoices }) => {
  const types = {
    paid: 'emarald',
    pending: 'orange',
    draft: 'slate'
  }

  return (
    <main className="w-[740px] m-auto flex flex-col gap-5">
      {/* {JSON.stringify(invoices)} */}
      {
        invoices.map(
          invoice => {
            return (
              <article
                key={invoice.id}
                className="bg-slate-700 px-4 py-4 rounded-lg flex justify-between text-white text-base items-center justify-items-center gap-3"
              >
                <div className="w-20">
                  <span className="text-slate-400">#</span>
                  <span className="font-extrabold">{invoice.code}</span>
                </div>
                <div className="w-44 font-semibold">{invoice.invoice.date}</div>
                <div className="w-44 font-semibold">{invoice.bill.to.client.name}</div>
                <div className="w-44 text-3xl font-extrabold">
                  {invoice.invoice.currency.symbol}
                  {formatNumber(invoice.invoice.grandTotal)}
                </div>
                {/* <div>{invoice.invoice.grandTotal}</div> */}
                {/* <div>{invoice.invoice.grandTotal.toLocaleString('en-US')}</div> */}
                <div>
                  {invoice.status === 'paid' && <BaseTag label={invoice.status} type='emerald' />}
                  {invoice.status === 'pending' && <BaseTag label={invoice.status} type='orange' />}
                  {invoice.status === 'draft' && <BaseTag label={invoice.status} type='slatered' />}
                </div>
                <div className="w-10 flex justify-center">
                  <TbChevronRight />
                </div>
              </article>
            )
          }
        )
      }
    </main>
  )
}

export default InvoicesList