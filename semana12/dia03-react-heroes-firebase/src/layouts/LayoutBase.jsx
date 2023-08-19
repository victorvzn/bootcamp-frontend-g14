import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

import { useUser } from "../hooks/useUser"

const LayoutBase = (props) => {
  const navigate = useNavigate()
  const { login, logout } = useUser()

  return (
    <>
      <header className='bg-amber-200 py-4 px-6'>
        <div className='container mx-auto flex justify-between'>
          <h1 className='font-bold'>Heroes App</h1>
          <nav className='flex gap-3'>
            <>
              <Link to='/'>Home</Link>
              <button onClick={login}>Login</button>
              <button onClick={logout}>Logout</button>
            </>
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