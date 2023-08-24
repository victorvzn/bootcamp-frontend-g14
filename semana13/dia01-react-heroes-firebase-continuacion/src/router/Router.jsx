import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LayoutBase from '../layouts/LayoutBase'

import Home from '../pages/Home'
import NewHero from '../pages/NewHero'
import EditHero from '../pages/EditHero'

import Login from '../pages/Login'

const Router = () => {
  return (
    <BrowserRouter>
      <LayoutBase>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new-hero' element={<NewHero />} />
          <Route path='/edit-hero/:id' element={<EditHero />} />

          <Route path='/login' element={<Login />} />
        </Routes>
      </LayoutBase>
    </BrowserRouter>
  )
}

export default Router