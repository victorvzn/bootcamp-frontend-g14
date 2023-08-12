import { createBrowserRouter } from 'react-router-dom'

import PrimaryLayout from '../layouts/PrimaryLayout'

import InvoicesPage from '../pages/InvoicesPage'
import NewInvoicePage from '../pages/NewInvoicePage'
import InvoiceDetailPage from '../pages/InvoiceDetailPage'
import InvoiceEditPage from '../pages/InvoiceEditPage'

export const PrimaryRouter = createBrowserRouter([
  {
    path: '/',
    element: <PrimaryLayout />,
    children: [
      {
        index: true,
        element: <InvoicesPage />
      },
      {
        path: '/new-invoice',
        element: <NewInvoicePage />
      },
      {
        path: '/invoice/:id',
        element: <InvoiceDetailPage />
      },
      {
        path: '/invoice/:id/edit',
        element: <InvoiceEditPage />
      }
    ]
  }
])