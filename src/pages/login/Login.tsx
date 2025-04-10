import { Link } from "react-router-dom"
import SocialLogin from "../../shared/SocialLogin"


const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse w-full gap-20">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-primary btn-outline mt-4">Login</button>
          <div className="divider text-sm text-gray-500 my-1.5">OR</div>
          <SocialLogin/>
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-green-600 font-medium">
              Register here
            </Link>
          </p>
        </fieldset>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login