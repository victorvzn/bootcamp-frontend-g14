import { useContext } from "react"

import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

// import useAuth from "../hooks/useAuth"

import { UserContext } from "../context/UserContext"

const LayoutBase = (props) => {
  const { user, cleanUser } = useContext(UserContext)

  // const { logout, isAuth } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    // logout()
    cleanUser()
    navigate('/login')
  }

  return (
    <>
      <header className='bg-amber-200 py-4 px-6'>
        <div className='container mx-auto flex justify-between'>
          <h1 className='font-bold'>Budget App</h1>
          <nav className='flex gap-3'>
            {user?.email && (
              <>
                <Link to='/'>Home</Link>
                <Link to='/new-budget'>New Budget</Link>
                <Link to='/new-expense'>New expense</Link>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}

            {!user?.email && (
              <>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
              </>
            )}
          </nav>
        </div>
      </header>
      <main className='my-6'>
        <div className='container mx-auto'>
          {props.children}
        </div>
      </main>
    </>
  )
}

export default LayoutBase