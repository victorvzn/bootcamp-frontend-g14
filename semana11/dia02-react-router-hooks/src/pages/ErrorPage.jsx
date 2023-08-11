import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <main className="bg-green-700 h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl text-white">Not found</h1>
      <Link to="/" className="text-white p-4 hover:underline hover:text-gray-900 duration-300">Home</Link>
    </main>
  )
}

export default ErrorPage