import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../shared/SocialLogin";
import { FaHome } from "react-icons/fa";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse w-full lg:gap-20">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Signup now!</h1>
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
            <form>
              <fieldset className="fieldset">
                <label className="fieldset-label">Name</label>
                <input type="text" className="input" placeholder="Name" />
                <label className="fieldset-label">Select Image</label>
                <input type="file" className="file-input" accept="image/*" />
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                {/* <div>
                  <a className="link link-hover">Forgot password?</a>
                </div> */}
                <div className="max-w-[320px]">
                  <button
                    type="submit"
                    className="btn btn-primary btn-outline mt-4 w-full"
                  >
                    Signup
                  </button>
                  <div className="divider text-sm text-gray-500">
                    OR
                  </div>
                  <SocialLogin />
                </div>
                <p className="text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary font-medium">
                    Login here
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
