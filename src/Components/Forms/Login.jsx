import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
    const { signInUser, googleLogin, twitterLogin } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    toast.success('Login successful');
                    navigate(location?.state || "/");
                }
            })
            .catch(error => {
                toast.error(error.message);
            });
    };


    const handleGoogleLogin = () => {
        handleSocialLogin(googleLogin);
    };

    // const handleFacebookLogin = () => {
    //     handleSocialLogin(facebookLogin);
    // };

    const handleTwitterLogin = () => {
        handleSocialLogin(twitterLogin);
    };

    const onSubmit = (data) => {
        signInUser(data.email, data.password)
            .then((result) => {
                if (result.user) {
                    toast.success('Login successful');
                    navigate(location?.state || "/");
                }
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    return (
        <div>
            <div className="carousel-item relative my-10 lg:h-96 rounded-lg w-full flex flex-col justify-center items-center">
                <img
                    src="/public/page-top-img.jpg"
                    className="w-full rounded-lg lg:h-96"
                    alt="carousel"
                />
                <div className="absolute flex flex-col rounded-lg h-full items-center justify-center left-0 top-0 gap-8 bg-gradient-to-r pl-16 lg:pl-28 from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h1 className="text-3xl lg:text-6xl text-white font-bold">
                        Login Now
                    </h1>
                </div>
            </div>

            <div className="flex gap-10 lg:px-40">
                <div className="px-8 py-12 rounded-3xl bg-[#F1F6F7] w-full ">
                    <h1 className="text-4xl font-bold text-center">
                        Login your Account
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-10">
                        <input {...register("email", { required: true })} name="email" type="email" placeholder="Your Email" className="input input-bordered input-warning w-full" />
                        {errors.email && <span className="text-sm text-red-500 font-medium -mt-4">Please enter your email</span>}
                        <label className="input input-bordered input-warning flex items-center gap-2">
                            <input  {...register("password", { required: true })} name="password" type={showPassword ? "text" : "password"} placeholder="Your Password" className="grow" />
                            <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer" aria-label="Toggle password visibility">
                                {showPassword ?  <FaRegEyeSlash  className=" text-2xl" /> : <FaRegEye className=" text-2xl" />}
                            </span>
                        </label>
                        {errors.password && <span className="text-sm text-red-500 font-medium -mt-4">Please enter your password</span>}
                        <div className="form-control">
                            <label className="cursor-pointer justify-start gap-5 w-fit label">
                                <input type="checkbox" defaultChecked className="checkbox checkbox-warning" />
                                <p className="">Remember Me</p>
                            </label>
                        </div>
                        <button type="submit" className="btn w-full bg-[#FFA415] text-white text-xl">Login Now</button>
                    </form>
                    <div className="mt-5 flex justify-center items-center">
                        <h5 className="text-lg font-bold">Are You New Here? <Link className="text-[#FFA415]" to="/register">Register Now</Link></h5>
                    </div>
                    <div className="divider">Login With</div>
                    <div className="flex gap-5 justify-center pt-4">
                        <button onClick={handleGoogleLogin}><img className="h-9 w-9 rounded-full" src="/public/google-icon.png" alt="Google" /></button>
                        <button onClick={handleTwitterLogin}><img className="h-9 w-9 rounded-full" src="/public/twitter-icon.png" alt="Twitter" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
