const Login = () => {
  return (
    <form className="w-96 mx-auto">
      <h1 className="text-center text-3xl mb-8">Budget App - Login</h1>

      <div className="flex flex-col gap-4 bg-slate-200 p-8 rounded-lg shadow-lg">
        <label className="font-medium">
          Email
          <input
            type="text"
            placeholder="jhon@mail.com"
            className="border w-full p-3"
          />
        </label>
        <label className="font-medium">
          Password
          <input
            type="text"
            placeholder="jhon@mail.com"
            className="border w-full p-3"
          />
        </label>
        <input
          type="submit"
          value="Login"
          className="w-full bg-amber-300 p-3 font-medium"
        />
      </div>
    </form>
  )
}

export default Login