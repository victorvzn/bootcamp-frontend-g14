import { Link } from 'react-router-dom'

const LayoutBase = (props) => {
  return (
    <>
      <header className='bg-amber-200 py-4 px-6'>
        <div className='container mx-auto flex justify-between'>
          <h1 className='font-bold'>React router</h1>
          <nav className='flex gap-3'>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
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