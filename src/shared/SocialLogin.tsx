import { FcGoogle } from "react-icons/fc"


const SocialLogin = () => {
  return (
    <div className="space-y-3">
      <button
        className="btn btn-outline w-full flex items-center justify-center"
      >
        <FcGoogle size={24} />
        Continue With Google
      </button>
    </div>
  )
}

export default SocialLogin