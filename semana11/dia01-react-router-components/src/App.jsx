import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import FrankParra from './pages/FrankParra'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='frank-parra' element={<FrankParra}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
