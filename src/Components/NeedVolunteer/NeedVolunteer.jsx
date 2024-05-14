import VolunteerPostCard from "./VolunteerPostCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import FlexMenuCard from "./FlexMenuCard";
import { Helmet } from "react-helmet";

const NeedVolunteer = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(6);
  const [search, setSearch] = useState([]);
  const [count, setCount] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };
  useEffect(() => {
    // Fetch volunteer posts from the API
    axios.get(`${import.meta.env.VITE_API_URL}/all-volunteers-post?page=${currentPage}&size=${itemPerPage}&search=${search}`)
      .then(res => {
        setVolunteers(res.data);
      })
      .catch(error => console.error("Error fetching volunteer posts:", error));
  }, [currentPage, itemPerPage,search]);

  // Fetch total count of volunteer posts
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/all-volunteers-post-count`)
      .then(res => {
        setCount(res.data.count);
      })
      .catch(error => console.error("Error fetching volunteer post count:", error));
  }, []);

  // Calculate pagination pages based on count and itemPerPage
  const paginationPages = itemPerPage !== 0 ? [...Array(Math.ceil(count / itemPerPage)).keys()].map(element => element + 1) : [];

  // Handle pagination page change
  const handlePaginationPages = (value) => {
    setCurrentPage(value);
  };

  // Handle previous page button click
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page button click
  const handleNextPage = () => {
    if (currentPage < paginationPages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // ------------ handleGrid and handleFlex ------------
  const handleGrid = () => {
    document.querySelector(".gridMenu").classList.remove("hidden");
    document.querySelector(".flexMenu").classList.add("hidden");
  };
  const handleFlex = () => {
    document.querySelector(".flexMenu").classList.remove("hidden");
    document.querySelector(".gridMenu").classList.add("hidden");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Helmet>
        <title>Join As A Volunteer</title>
      </Helmet>
      
      <div className="carousel-item relative my-10 lg:h-96 rounded-lg w-full flex flex-col justify-center items-center">
        <img
          src="page-top-img.jpg"
          className="w-full rounded-lg lg:h-96"
          alt="carousel"
        />
        <div className="absolute flex flex-col rounded-lg h-full items-center justify-center left-0 top-0 gap-8 bg-gradient-to-r pl-16 lg:pl-28 from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <h1 className="text-3xl lg:text-6xl text-white font-bold">
            Join Volunteer
          </h1>
        </div>
      </div>

      <div className="flex justify-between gap-5">
        <form onSubmit={handleSearch} className="input input-bordered mb-10 input-warning left-0 flex justify-center mt-10 lg:w-96 items-center gap-2">
          <input name="search" type="text" className="grow" placeholder="Search" />
          <button className="bg-[#E7A500] p-2 rounded-lg font-medium text-white translate-x-3">Search</button>
        </form>
        <div className="flex flex-col lg:flex-row gap-5">
          <button onClick={handleGrid} className="hidden md:block lg:block"><CgMenuGridR className="text-4xl" /></button>
          <button onClick={handleFlex} className="hidden md:block lg:block"><GiHamburgerMenu className="text-4xl" /></button>
        </div>
      </div>

      <div className="gridMenu block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10">
          {volunteers.map((volunteer) => (
            <VolunteerPostCard
              key={volunteer?._id}
              volunteer={volunteer}
            />
          ))}
        </div>
      </div>

      <div className="flexMenu hidden">
        <div className="flex flex-col gap-5 ">
          {volunteers.map((volunteer) => (
            <FlexMenuCard
              key={volunteer?._id}
              volunteer={volunteer}
            />
          ))}
        </div>
      </div>

      <div className="join flex justify-center mt-20">
        <button className="join-item btn bg-[#ffdada]" onClick={handlePreviousPage}>Previous</button>
        {paginationPages.map((page) => (
          <input
            key={page}
            onClick={() => handlePaginationPages(page)}
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label={`${page}`}
            checked={page === currentPage}
          />
        ))}
        <button className="join-item btn bg-[#d5bafb]" onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default NeedVolunteer;
