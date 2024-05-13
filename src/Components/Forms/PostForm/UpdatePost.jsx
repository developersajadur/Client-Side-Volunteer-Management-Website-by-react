import {  useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";

const UpdatePost = () => {
    const axiosSecure = useAxios();
    const post = useLoaderData();
    const { user } = useAuth();
    const [date, setDate] = useState(new Date());
    const day = date?.getDate();
    const month = date?.getMonth() + 1;
    const year = date?.getFullYear();
    const deadline = `${day}/${month}/${year}`;
    const email = user?.email;
    const name = email?.displayName;
    const { register, handleSubmit } = useForm();

    const onSubmit = (newPost) => {
        const dataToSend = { ...newPost, email, name, deadline };
        axiosSecure.put(`/Volunteers-post/${post?._id}`, dataToSend)
            .then(res => {
                console.log(res.data);
                if(res.data.modifiedCount > 0) {
                    toast.success('Post updated successfully');
                }
            })
            .catch(error => {
                console.error('Error updating spot:', error);
                toast.error('Failed to update spot');
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
                        Update Your Post
                    </h1>
                </div>
            </div>

            {/* ------------------------------------------------ */}

            <div className="h-full w-full flex flex-col rounded-2xl justify-center items-center py-10 bg-[#F4F3F0]">
                <div className=" flex flex-col justify-center text-center gap-2 mb-5">
                    <h1 className="text-3xl font-bold"> Update Your Post Now</h1>
                    <p className="text-center">Explore breathtaking destinations! Discover our curated selection of diverse tourism spots. <br /> From scenic landscapes to cultural landmarks, plan your next adventure with ease.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full px-5 lg:px-28">

                    {/* form column 1 */}
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="w-full flex flex-col gap-2 font-semibold">
                            <h6 className="">Post Title</h6>
                            <input defaultValue={post?.postTitle} required {...register("postTitle")} name="postTitle" type="text" placeholder="Enter Post Title" className="input w-full" />
                        </div>
                        <div className="w-full flex flex-col gap-2 font-semibold">
                            <h6 className="">Post Thumbnail Image</h6>
                            <input required defaultValue={post?.thumbnail} {...register("thumbnail")} name="thumbnail" type="text" placeholder="Post Thumbnail Image" className="input w-full" />
                        </div>
                    </div>

                    {/* form column 2 */}
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="w-full flex flex-col gap-2 font-semibold">
                            <h6 className="">Post Category</h6>
                            <input required defaultValue={post?.category} {...register("category")} name="category" type="text" placeholder="Enter Post Category" className="input w-full" />
                        </div>
                        <div className="w-full flex flex-col gap-2 font-semibold">
                            <h6 className="">Location</h6>
                            <input required defaultValue={post?.location} {...register("location")} name="location" type="text" placeholder="Enter Location" className="input w-full" />
                        </div>
                    </div>

                    {/* form column 3 */}
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="w-full flex flex-col gap-2 font-semibold">
                            <h6 className="">Volunteers Needed</h6>
                            <input required defaultValue={post?.volunteersNeeded} {...register("volunteersNeeded")} name="volunteersNeeded" type="number" min={0} placeholder="Enter Volunteers Needed" className="input w-full" />
                        </div>
                        <div className="w-full flex flex-col gap-2 font-semibold">
                            <h6 className="">Deadline</h6>
                            <ReactDatePicker
                                className="w-full h-12 rounded-lg"
                                toggleCalendarOnIconClick
                                defaultValue={post?.deadline}
                                selected={date}
                                dateFormat="dd-MM-yyyy"
                                onChange={(deadline) => setDate(deadline)}
                            />
                        </div>
                    </div>

                    {/* form details */}
                    <div className="w-full flex flex-col gap-2 font-semibold">
                        <h6 className="">Description</h6>
                        <textarea required defaultValue={post?.description} {...register("description")} name="description" placeholder="Enter description" className="textarea w-full"></textarea>
                    </div>

                    <button className="btn bg-[#FF5528] text-white font-semibold text-xl" type="submit">Update Now</button>
                </form>
            </div>
        </div>
    );
};

export default UpdatePost;
