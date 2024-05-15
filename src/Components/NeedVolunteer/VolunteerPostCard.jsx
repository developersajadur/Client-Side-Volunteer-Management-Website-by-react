import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const VolunteerPostCard = ({ volunteer }) => {
  const {
    thumbnail,
    postTitle,
    category,
    volunteersNeeded,
    deadline,
    location,
    _id,
  } = volunteer;
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className="card lg:w-96 border border-[#FF5528]">
        <figure className="px-2 pt-2 relative">
          <div className="bg-[#FF5528] px-4 py-1 top-2 right-2 font-semibold rounded-bl-xl  text-white absolute">
            Vacancy {volunteersNeeded || "Not Found"}
          </div>
          <img src={thumbnail || "faq-1.jpg"} className="rounded-xl" />
        </figure>
        <div className="card-body items-start text-start px-4 py-3">
          <h2 className="card-title font-bold">{postTitle || "Not Found"}</h2>
          <div className="w-full flex justify-between items-center">
            <h6 className="">
              Quickly! You Can Apply{" "}
              <span className="text-[#FF5528]">{deadline || "Not Found"}</span>
            </h6>
            <Link
              to={`/volunteer-details/${_id}` || "/"}
              className=" text-white px-6 py-2 rounded-lg font-semibold bg-[#FF5528]"
            >
              View
            </Link>
          </div>
          <div className="w-full flex justify-between">
            <div className="badge text-white py-3 bg-[#FF5528]">{category || "Not Found"}</div>
            <div className="badge badge-secondary flex gap-3  text-white  bg-[#FF5528] items-center py-3">
              <IoLocationSharp /> {location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPostCard;
