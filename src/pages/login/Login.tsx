import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../shared/SocialLogin";
import { FaHome } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse w-full lg:gap-20">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          {/* Back to Home Button */}
          <button
            onClick={() => navigate("/")}
            className="btn btn-outline btn-neutral mt-8 w-full  hover:!text-white transform hover:scale-105 transition duration-300"
          >
            <FaHome size={18} /> Back to Home
          </button>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="fieldset-label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              {/* <div>
                <a className="link link-hover">Forgot password?</a>
              </div> */}
              <div className="max-w-[320px]">
                <button className="btn btn-primary btn-outline mt-4 w-full">
                  Login
                </button>
                <div className="divider text-sm text-gray-500">OR</div>
                <SocialLogin />
              </div>
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
  );
};

export default Login;
