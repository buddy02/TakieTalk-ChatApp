import { Link } from "react-router-dom"
import GenderCheckBox from "./GenderCheckBox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })
  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  }

  return (
    <div className="flex items-center justify-center min-w-96">
      <div className="w-full p-6 bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-center">
          SignUp
          <span className="text-blue-500"> TalkieTalk</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2"><span>FullName</span></label>
            <input type="text" placeholder="Enter FullName" className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2"><span>Username</span></label>
            <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2"><span>Password</span></label>
            <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2"><span>Confirm Password</span></label>
            <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>
          <GenderCheckBox inputs={inputs} setInputs={setInputs} />

          <Link to={"/login"} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</Link>
          <div><button className="btn btn-sm btn-block mt-4" disabled={loading} >{loading ? <span className="loading loading-dots loading-xs"></span> : "Sign Up"}</button></div>
        </form>
      </div>

    </div>
  )
}

export default SignUp
