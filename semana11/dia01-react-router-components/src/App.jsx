import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import ChristopherAcosta from './pages/ChristopherAcosta'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/prueba' element={<ChristopherAcosta />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
