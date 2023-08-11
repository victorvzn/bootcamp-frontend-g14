import { Link, Outlet } from "react-router-dom"

const PrimaryLayout = () => {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}

export default PrimaryLayout