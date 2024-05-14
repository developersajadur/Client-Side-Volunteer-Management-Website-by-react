import { Link, NavLink } from "react-router-dom";
import "../style.css";
import useAuth from "../Hooks/useAuth";
import { MdLightMode } from "react-icons/md";
import { PiMoonBold } from "react-icons/pi";
import { useEffect, useState } from "react";

const Header = () => {
  const { user, logOutUser } = useAuth();

  const handleLogOut = () => {
    logOutUser(user);
  };

 // Theme change functionality
const [theme, setTheme] = useState(
  localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
);

useEffect(() => {
  localStorage.setItem("theme", theme);
  document.querySelector("html").setAttribute("data-theme", theme);
}, [theme]);

const handleToggle = () => {
  setTheme(theme === "light" ? "synthwave" : "light");
};

useEffect(() => {
  const navbar = document.querySelector(".navbar");
  if (theme === "synthwave") {
    navbar.classList.remove("bg-white");
    navbar.classList.add("bg-[#1D232A]");
  } else {
    navbar.classList.remove("bg-[#1D232A]");
    navbar.classList.add("bg-white");
  }
}, [theme]);


  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/need-volunteer">All Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar py-3 sticky top-0 z-40  px-1 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            id="nav"
            className="menu menu-sm text-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <img
            className="w-full h-20 "
            src="/logo.png"
            alt="hotel"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          id="navLg"
          className="menu menu-horizontal nav px-1 text-xl font-semibold flex gap-5"
        >
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-8">
        <label className="swap swap-rotate">
          <input
            checked={theme === "light" ? false : true}
            onChange={handleToggle}
            type="checkbox"
          />
          <MdLightMode className="swap-on fill-current w-10 h-10" />
          <PiMoonBold className="swap-off fill-current w-10 h-10" />
        </label>
        {!user ? (
          <Link to="/login">
            <button className="btn bg-[#E7A500]">Sign In</button>
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <div
              data-for="profile-tip"
              data-tip="hello"
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="border-2 border-[#E7A500] text-black w-28 rounded-full">
                <img
                  className=""
                  src={user?.photoURL || "user-img.png"}
                  alt="User"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className=" mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="font-bold">
                  {user?.displayName || user?.email || "User Name Not Found"}
                </a>
              </li>
              <li>
                <NavLink to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </NavLink>
              </li>
              <li><NavLink to="/job-post">Post A Job</NavLink></li>
              <li><NavLink to="/job-request">Job Request</NavLink></li>
              <li><NavLink to="/my-job-post">My Posted Job</NavLink></li>
              <li><NavLink to="/my-job-apply">My Applied Job</NavLink></li>
              <li><button onClick={handleLogOut}>Log Out</button></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
