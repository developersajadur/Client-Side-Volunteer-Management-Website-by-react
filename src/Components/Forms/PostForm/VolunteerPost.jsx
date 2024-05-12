import { useContext, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const VolunteerPost = () => {
    const {user} = useContext(AuthContext)
    const [date, setDate] = useState(new Date());
    const day = date.getDate();
    const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const deadline = `${day}/${month}/${year}`
      const email = user.email;
      const name = email.displayName;

    const { register, handleSubmit } = useForm();
    const onSubmit = (newPost) => {
        const dataToSend = { ...newPost,email,name,deadline };
        axios.post("http://localhost:5000/Volunteers-post", dataToSend)
        .then(res =>{
            if(res.data.insertedId){
                Swal.fire({
                  icon: "success",
                  title: "Post successfully",
                  text: "Thanks For Stay With Us."
                });
              }
        }
        )
    }
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
                       Post Now
                    </h1>
                </div>
            </div>
            {/* ------------------------------------------------ */}

            <div className="h-full w-full flex flex-col rounded-2xl justify-center items-center py-10 bg-[#F4F3F0]">
           <div className=" flex flex-col justify-center text-center gap-2 mb-5">
           <h1 className="text-3xl font-bold">Post For Need Volunteer</h1>
            <p className="text-center">Explore breathtaking destinations! Discover our curated selection of diverse tourism spots. <br /> From scenic landscapes to cultural landmarks, plan your next adventure with ease.</p>
           </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full px-5 lg:px-28">

            {/* form colum 1 */}
        <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full flex flex-col gap-2 font-semibold">
                <h6 className="">Post Title</h6>
            <input required {...register("postTitle")} name="postTitle"  type="text" placeholder="Enter Post Title" className="input w-full" />
            </div>
            <div className="w-full flex flex-col gap-2 font-semibold">
                <h6 className="">Post Thumbnail Image</h6>
            <input required {...register("thumbnail")} name="thumbnail"  type="text" placeholder="Post Thumbnail Image" className="input w-full" />
            </div>
        </div>

         {/* form colum 2 */}

        <div className="flex flex-col lg:flex-row gap-5">

            <div className="w-full flex flex-col gap-2 font-semibold">
                <h6 className="">Post Category</h6>
            <input required {...register("category")} name="category"  type="text" placeholder="Enter Post Category" className="input w-full" />
            </div>

            <div className="w-full flex flex-col gap-2 font-semibold">
                <h6 className="">Location</h6>
            <input required {...register("location")} name="location"  type="text" placeholder="Enter Location" className="input w-full" />
            </div>
        </div>

         {/* form colum 3 */}

        <div className="flex flex-col lg:flex-row gap-5">

        <div className="w-full flex flex-col gap-2 font-semibold">
                <h6 className="">Volunteers Needed</h6>
            <input required {...register("volunteersNeeded")} name="volunteersNeeded"  type="number" min={0} placeholder="Enter Volunteers Needed" className="input w-full" />
            </div>

        <div className="w-full flex flex-col gap-2 font-semibold">
                <h6 className="">Deadline</h6>
                <ReactDatePicker
                className="w-full h-12 rounded-lg"
      toggleCalendarOnIconClick
      selected={date}
      dateFormat="dd-MM-yyyy"
      onChange={(deadline) => setDate(deadline)}
    />
            </div>

            
        </div>

        {/* form details */}

        
        <div className="w-full flex flex-col gap-2 font-semibold">
                <h6 className="">Description</h6>
                <textarea required {...register("description")} name="description" placeholder="Enter description" className="textarea w-full"></textarea>
            </div>



        <button className="btn bg-[#FF5528] text-white font-semibold text-xl" type="submit">Post Now</button>
        </form>
        </div>
            
        </div>
    );
};

export default VolunteerPost;
