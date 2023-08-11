import { Link, Outlet } from "react-router-dom"

const PrimaryLayout = () => {
  return (
    <>
      <header>
        <h1 className="text-2xl text-center">React-router-hooks</h1>
        <nav className="flex justify-center gap-4 mt-4 bg-orange-500 py-3">
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
          <Link to='/not-found-page'>Not Found</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        Agosto 2023
      </footer>
    </>
  )
}

export default PrimaryLayout