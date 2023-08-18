import { useNavigate, Outlet } from "react-router-dom"
import { useEffect } from "react"

import useAuth from '../hooks/useAuth.js'

const PrivateRoute = () => {

  const { isAuth } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth])

  return (
    <Outlet />
  )
}

export default PrivateRoute