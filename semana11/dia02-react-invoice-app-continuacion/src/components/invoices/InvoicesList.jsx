import { formatNumber } from "../../utils"
import { TbChevronRight } from "react-icons/tb";
import BaseTag from "../shared/BaseTag";
import { Link } from "react-router-dom";

const InvoicesList = ({ invoices }) => {
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
                <div className="w-44 text-3xl font-extrabold text-right">
                  {invoice.invoice.currency.symbol}
                  {formatNumber(invoice.invoice.grandTotal)}
                </div>
                {/* <div>{invoice.invoice.grandTotal}</div> */}
                {/* <div>{invoice.invoice.grandTotal.toLocaleString('en-US')}</div> */}
                <div>
                  {invoice.status === 'paid' &&
                    <BaseTag
                      label={invoice.status}
                      background='bg-emerald-400/20'
                      textColor='text-emerald-400'
                    />}
                  {invoice.status === 'pending' &&
                    <BaseTag
                      label={invoice.status}
                      background='bg-orange-400/20'
                      textColor='text-orange-400'
                    />}
                  {invoice.status === 'draft' &&
                    <BaseTag
                      className='text-slate-100'
                      label={invoice.status}
                      background='bg-slate-400/20'
                      textColor='text-slater-400'
                    />}
                </div>
                <div className="w-10 flex justify-center">
                  <Link to={`/invoice/${invoice.id}`}>
                    <TbChevronRight />
                  </Link>
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