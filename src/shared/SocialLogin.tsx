import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "../providers/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";


interface LocationState {
  from?: string;
}

const SocialLogin = () => {
  const { setUser, googleLogin } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const handleGoogleLogin = async () => {
    try {
      // 1. Authenticate with Google
      const res = await googleLogin();
      const user = res.user;
      setUser(user);
      toast.success("Google login successful!");

      // 2. Navigate with proper state typing
      const state = location.state as LocationState;
      navigate(state?.from || "/");

      // 3. Prepare and save user data
      const createdAt = user.metadata?.creationTime || new Date().toISOString();
      const type = "user";
      const newUser = {
        name: user.displayName || "Google User",
        email: user.email, // Required field
        photo: user.photoURL || "",
        type,
        createdAt,
      };

      // 4. Save to database
      await axiosPublic.post('/users', newUser);
    } catch (error: unknown) {
      let errorMessage = "Google login failed";
      if (error instanceof Error) {
        errorMessage += `: ${error.message}`;
      }
      toast.error(errorMessage);
      console.error("Google login error:", error);
    }
  };

  return (
    <div className="space-y-3">
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline w-full flex items-center justify-center"
        aria-label="Continue with Google"
      >
        <FcGoogle size={24} />
        <span className="ml-2">Continue With Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;