import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LayoutBase from '../layouts/LayoutBase'

import Home from '../pages/Home'

const Router = () => {
  return (
    <BrowserRouter>
      <LayoutBase>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </LayoutBase>
    </BrowserRouter>
  )
}

export default Router