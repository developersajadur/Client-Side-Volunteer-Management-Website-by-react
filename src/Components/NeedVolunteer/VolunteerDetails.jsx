import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const VolunteerDetails = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const volunteer = useLoaderData();

  const onSubmit = (data) => {
    console.log(data);
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
            Apply Now
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 w-full">
        <div className="w-full lg:w-[70%] flex flex-col gap-5">
          <h1 className="text-4xl font-bold ">{volunteer?.postTitle}</h1>

          <div className="flex gap-5 items-center">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="organizer" />
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold">{volunteer?.organizerName}</h2>
              <p className="text-xl font-medium">{volunteer?.organizerEmail}</p>
            </div>
          </div>
          <img src={volunteer?.thumbnail} alt="thumbnail" />
          <h5 className="text-2xl font-bold">About this Job Post</h5>
          <h5 className="text-xl font-semibold">Category: <span className="text-lg font-medium">{volunteer?.category}</span></h5>
          <h5 className="text-xl font-semibold">Location: <span className="text-lg font-medium">{volunteer?.location}</span></h5>
          <p className="text-xl font-normal"><span className="text-xl font-semibold">Description: </span> {volunteer?.description}</p>
        </div>

        {/* -------------------------------------------------------------------------------------- */}

        <div className="w-full lg:w-[30%]">
          <h2 className="text-xl font-bold">Fast! Available {volunteer?.volunteersNeeded} Vacancy Now</h2>
          <h2 className="text-xl font-bold">You Can Apply Until {volunteer?.deadline}</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-10">
            <input {...register("name", { required: true })} name="name" type="text" placeholder="Your Name" className="input input-bordered w-full" />
            {errors.name && <span className="text-sm text-red-500 font-medium -mt-4">Please enter your name</span>}

            <input {...register("email", { required: true })} name="email" type="email" placeholder="Your Email" className="input input-bordered w-full" />
            {errors.email && <span className="text-sm text-red-500 font-medium -mt-4">Please enter your email</span>}

            <input {...register("number", { required: true })} name="number" type="number" placeholder="Your Phone Number" className="input input-bordered w-full" />
            {errors.number && <span className="text-sm text-red-500 font-medium -mt-4">Please enter your phone number</span>}

            <textarea {...register("message", { required: true })} name="message" placeholder="Discribe Your Self" className="textarea textarea-bordered w-full h-40"></textarea>
            {errors.message && <span className="text-sm text-red-500 font-medium -mt-4">Please enter your message</span>}

            <button type="submit" className="btn w-full bg-[#FFA415] text-white text-xl">Apply Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDetails;
