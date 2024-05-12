import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Providers/AuthProvider";

const Profile = () => {
    const {user , updateUserProfile} = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
            // update user
            updateUserProfile( data.image , data.name)
            .then(() => {
                Swal.fire({
                    title: "Wow! Room Booked successfully",
                    icon: "success",
                    confirmButtonText: '<a href="">Say Thanks!</a>',
                });
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    return (
        <div className="mt-10 flex flex-col lg:flex-row gap-20 justify-center items-center px-2 lg:px-10">
            <Helmet>
                <title>
                    {user?.displayName || user.email || "User Details Not Found"}
                </title>
            </Helmet>
            <div className="flex flex-col gap-5">
            <div className="h-full w-full flex justify-center">
               <img className="rounded-full border-8 border-[#E7A500] lg:h-72 lg:w-72" src={user?.photoURL || "../../public/user-img.png" }  alt="Profile Picture" />
            </div>
            <h1 className="font-bold text-3xl lg:text-4xl text-center">{user?.displayName || "User Name Not Found"}</h1>
            <p className="text-center text-lg lg:text-xl font-bold">{user?.email || "Email Not Found"}</p>
            </div>
            <div className="">
                <h1 className="text-3xl text-center font-bold">Update Your Name And Photo URL</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-10" >
            <input {...register("name", { required: true })} name="name" type="text" placeholder="Your Full Name" className="input input-bordered w-full" />
            {errors.name && <span className="text-sm text-red-500 font-medium -mt-4">Please Write Your Name</span>}

            <input {...register("image" , { required: true })} name="image" type="text" placeholder="Your Photo URL" className="input input-bordered w-full" />
            {errors.image && <span className="text-sm text-red-500 font-medium -mt-4">Please Write Your Image URL</span>}
            <button className="btn w-full bg-[#E7A500]">Update Now</button>
            </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Profile;