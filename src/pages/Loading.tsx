
import RingLoader from "react-spinners/RingLoader";

const Loading = () => {
  return (


    <div className="flex min-h-[calc(100vh-173px)] justify-center items-center space-x-4">
      <RingLoader color="#432DD7" size={100} />
      <span className="text-4xl font-medium text-[#432DD7]">Loading...</span>
    </div>
  );
};

export default Loading;
