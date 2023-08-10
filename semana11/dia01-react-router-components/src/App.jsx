import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import LayoutBase from './layouts/LayoutBase'
import Character from './pages/Character'

function App() {
  return (
    <>
      <BrowserRouter>
        <LayoutBase>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/character/:id' element={<Character />} />
          </Routes>
        </LayoutBase>
      </BrowserRouter>
    </>
  )
}

export default App
