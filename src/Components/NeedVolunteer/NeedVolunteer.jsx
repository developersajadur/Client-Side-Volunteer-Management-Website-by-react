import { useLoaderData } from "react-router-dom";
import VolunteerPostCard from "./VolunteerPostCard";

const NeedVolunteer = () => {
  const volunteers = useLoaderData();
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
           Join Volunteer
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {volunteers?.map((volunteer) => (
          <VolunteerPostCard
            key={volunteer?._id}
            volunteer={volunteer}
          ></VolunteerPostCard>
        ))}
      </div>
    </div>
  );
};

export default NeedVolunteer;
