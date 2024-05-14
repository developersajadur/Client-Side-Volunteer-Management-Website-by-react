import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";


const Footer = () => {
    return (
        <div className="mt-20 bg-center bg-cover" style={{backgroundImage: "url('https://i.ibb.co/5cLTVL5/footer-bg-1-1.jpg')"}}>

            <footer className="footer p-10 text-[#6A7A76] text-lg font-medium">
  <aside>
   <img src="/public/logo.png" className="w-52" alt="" />
    <p>We help businesses maximize their online <br /> presence with a personalized approach <br /> to digital marketing.</p>
    <div className="flex gap-5 items-center">
    <FiPhoneCall className="text-5xl text-[#E29617]" />
            <div className="flex flex-col text-white">
              <h2 className="text-xl font-medium"> Hotline 24/7 </h2>
              <p className="text-xl font-medium">01787448412</p>
            </div>
          </div>
  </aside> 
  <nav>
    <h6 className="text-2xl font-bold text-white">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="text-2xl font-bold text-white">Quick Link</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="text-2xl font-bold text-white">Contact Info</h6> 
    <div className="flex items-center gap-2"><IoLocationSharp className="text-[#E29617]" /> Chirirbandar, Dinajpur</div>
    <div className="flex items-center gap-2"><IoIosMail className="text-[#E29617]" /> itzmesojib@gmail.com</div>
    <div className="flex items-center gap-2">
        <a href="" className=""><FaFacebook className="text-4xl" /></a>
        <a href="" className=""><AiFillTwitterCircle className="text-4xl" /></a>
        <a href="" className=""><FaGithub className="text-4xl" /></a>
        <a href="" className=""><FaLinkedin className="text-4xl" /></a>
    </div>
  </nav>
</footer>
<div className=" bg-[#6A7A76] border border-[#6A7A76] my-5 lg:mx-10"></div>
<p className="text-[#6A7A76] text-lg text-center font-semibold pb-5">© Copyright 2024 by Sajadur Rahman</p>
        </div>
    );
};

export default Footer;