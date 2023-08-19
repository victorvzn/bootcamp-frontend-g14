import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LayoutBase from '../layouts/LayoutBase'

import Home from '../pages/Home'
import Login from '../pages/Login'

const Router = () => {
  return (
    <BrowserRouter>
      <LayoutBase>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </LayoutBase>
    </BrowserRouter>
  )
}

export default Router