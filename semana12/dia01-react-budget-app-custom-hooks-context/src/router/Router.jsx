import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LayoutBase from '../layouts/LayoutBase'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

import PrivateRoute from './PrivateRoute'

import NewBudget from '../pages/NewBudget'
import NewExpense from '../pages/NewExpense'

import { UserProvider } from '../context/UserContext'

const Router = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <LayoutBase>
          <Routes>

            <Route element={<PrivateRoute />}>
              <Route path='/' element={<Home />} />
              <Route path='/new-budget' element={<NewBudget />} />
              <Route path='/new-expense' element={<NewExpense />} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </LayoutBase>
      </BrowserRouter>
    </UserProvider>
  )
}

export default Router