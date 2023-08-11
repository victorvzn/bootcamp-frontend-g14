import { useEffect, useState } from "react"

import { fetchInvoices } from "./services/invoices"
import Header from "./components/Header"
import InvoicesList from "./components/invoices/InvoicesList"

function App() {
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    // fetchInvoices().then(setInvoices)
    fetchInvoices().then(data => setInvoices(data))
  }, [])

  return (
    <>
      <Header />

      <InvoicesList invoices={invoices} />
    </>
  )
}

export default App
