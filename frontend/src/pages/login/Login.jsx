const Login = () => {
  return (
    <div className="flex items-center justify-center min-w-96">
      <div className="w-full p-6 bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-center">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2"><span>Username</span></label>
            <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
          </div>
          <div>
            <label className="label p-2"><span>Password</span></label>
            <input type="text" placeholder="Enter password" className="w-full input input-bordered h-10" />
          </div>
          <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Don't have an account?</a>
          <div><button className="btn btn-sm btn-block mt-4">Login</button></div>
        </form>
      </div>

    </div>
  )
}

export default Login
