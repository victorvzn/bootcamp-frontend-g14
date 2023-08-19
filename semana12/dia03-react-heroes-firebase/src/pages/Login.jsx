import { useUser } from "../hooks/useUser"

const Login = () => {
  const { login } = useUser()

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login