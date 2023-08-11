import { Link, RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

import PrimaryLayout from './layouts/PrimaryLayout'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PokemonDetail from './pages/PokemonDetail'
import ErrorPage from './pages/ErrorPage'

function App() {
  const PrimaryRouter = createBrowserRouter([
    {
      path: '/',
      element: <PrimaryLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/pokemon/:id',
          element: <PokemonDetail />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={PrimaryRouter} />
  )
}

export default App
