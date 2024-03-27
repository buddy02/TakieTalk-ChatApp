import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password)
  }
  return (
    <div className="flex items-center justify-center min-w-96">
      <div className="w-full p-6 bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-center">
          Login
          <span className="text-blue-500"> TalkieTalk</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2"><span>Username</span></label>
            <input type="text" placeholder="Enter username" value={username} onChange={(e) => { setUsername(e.target.value) }} className="w-full input input-bordered h-10" />
          </div>
          <div>
            <label className="label p-2"><span>Password</span></label>
            <input type="text" placeholder="Enter password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="w-full input input-bordered h-10" />
          </div>
          <Link to={"/signup"} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Don't have an account?</Link>
          <div><button className="btn btn-sm btn-block mt-4" disabled={loading} >{loading ? <span className="loading loading-dots loading-xs"></span> : "Login"}</button></div>
        </form>
      </div>

    </div>
  )
}

export default Login
