import { useEffect, useState } from "react"

function App() {
  const url = 'http://localhost:3000/invoices'

  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    const fetchInvoices = async () => {
      const response = await fetch(url)

      const data = await response.json()

      console.log(data)

      setInvoices(data)
    }

    fetchInvoices()
  }, [])

  return (
    <>
      <h1 className="text-4xl">Invoices</h1>

      {/* {JSON.stringify(invoices)} */}

      {invoices.map(invoice => {

        return (
          <>
            <h1>{invoice.id}</h1>
            <span>{invoice.bill.to.client.name}</span>
          </>
        )

      })}
    </>
  )
}

export default App
