import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../shared/SocialLogin";
import { FaHome } from "react-icons/fa";
import { useAuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { FormEvent } from "react";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userLogin, setUser, googleLogin } = useAuthContext();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    userLogin(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        toast.success("Login successful!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error: Error) => {
        toast.error("Login failed!  " + error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const user = res.user;
        setUser(user);
        toast.success("Google login successful!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Google login failed! " + error.message);
      });
  };

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
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  name="password"
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
                    Login
                  </button>
                  <div className="divider text-sm text-gray-500">OR</div>
                  <div onClick={handleGoogleLogin}>
                    <SocialLogin />
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600">
                  Don’t have an account?{" "}
                  <Link to="/signup" className="text-green-600 font-medium">
                    Register here
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

export default Login;
