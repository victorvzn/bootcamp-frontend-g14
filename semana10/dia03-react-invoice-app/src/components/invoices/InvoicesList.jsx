
const InvoicesList = ({ invoices }) => {
  return (
    <main>
      {/* {JSON.stringify(invoices)} */}
      {
        invoices.map(
          invoice => {
            return (
              <article key={invoice.id}>
                <span>{invoice.bill.to.client.name}</span>
              </article>
            )
          }
        )
      }
    </main>
  )
}

export default InvoicesList