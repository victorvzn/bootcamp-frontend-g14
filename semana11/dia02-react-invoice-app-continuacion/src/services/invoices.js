const url = 'http://localhost:3000/invoices'

export const fetchInvoices = async () => {
  const response = await fetch(url)

  const data = await response.json()

  // console.log(data)

  return data
}

export const getInvoice = async (id) => {
  const response = await fetch(`${url}/${id}`)

  const data = await response.json()

  return data
}