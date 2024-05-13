import axios from "axios";
import { useEffect, useState } from "react";
import VolunteerPostCard from "../NeedVolunteer/VolunteerPostCard";
import { NavLink } from "react-router-dom";

const HomeJobPost = () => {
    const [volunteers, setVolunteers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        // Fetch volunteer posts from the API
        axios.get(`http://localhost:5000/all-volunteers-post?page=${page}`)
          .then(res => {
            setVolunteers(res.data);
          })
          .catch(error => console.error("Error fetching volunteer posts:", error));
      }, [page]);
      
    return (
        <div className="">
            <h1 className="text-2xl lg:text-5xl font-bold text-center">Join As Volunteer</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center mt-10 gap-10">
                {volunteers?.slice(0, 6).map((volunteer) => (
                    <VolunteerPostCard
                        key={volunteer?._id}
                        volunteer={volunteer}
                    />
                ))}
            </div>
            <NavLink to="/need-volunteer" className="flex justify-center mt-10">
            <button className="btn text-lg font-medium text-white bg-[#E7A500]">Show More</button>
          </NavLink>
        </div>
    );
};

export default HomeJobPost;
