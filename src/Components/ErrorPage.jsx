import Lottie from "lottie-react";
import errorLottie from "../../public/error.json"
import { NavLink } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="w-full  h-full flex flex-col justify-center items-center ">
            <Lottie className="lg:w-96" animationData={errorLottie} loop={true}></Lottie>
            <NavLink to="/" className="text-white px-6 py-2 rounded-lg font-semibold bg-[#FF5528] mt-10">Go Back Home</NavLink>
        </div>
    );
};

export default ErrorPage;