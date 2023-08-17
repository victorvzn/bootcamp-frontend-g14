import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

import useAuth from "../hooks/useAuth"

const LayoutBase = (props) => {
  const { logout, isAuth } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <>
      <header className='bg-amber-200 py-4 px-6'>
        <div className='container mx-auto flex justify-between'>
          <h1 className='font-bold'>Budget App</h1>
          <nav className='flex gap-3'>
            {isAuth && (
              <>
                <Link to='/'>Home</Link>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}

            {!isAuth && (
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