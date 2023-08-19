import { useUser } from "../hooks/useUser"

const Login = () => {
  const { login } = useUser()

  return (
    <div className="container mx-auto flex justify-center py-40">
      <button onClick={login} className="border px-5 py-3 w-56 bg-orange-600 text-white font-semibold">
        Login with Github
      </button>
    </div>
  )
}

export default Login