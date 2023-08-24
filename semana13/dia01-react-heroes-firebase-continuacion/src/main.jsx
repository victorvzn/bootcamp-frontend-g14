import ReactDOM from 'react-dom/client'
import Router from './router/Router.jsx'
import './index.css'

import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Router />
    <Toaster richColors />
  </>
)

// hola