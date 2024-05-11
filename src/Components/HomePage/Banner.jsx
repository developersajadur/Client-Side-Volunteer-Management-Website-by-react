import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mb-20 -translate-y-5">
      <div className="">
        <Swiper
          cssMode={true}
          navigation={false}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          pagination={true}
          loop={true}
          mousewheel={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          keyboard={true}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper  sm:mt-5"
        >
            {/* ------------------ banner 1 ------------------- */}
            <SwiperSlide className="carousel w-full">
  <div className="carousel-item relative  w-full flex flex-col justify-center items-center">
    <img
      src="/public/banner-1.jpg"
      className="w-full rounded-lg"
    />
    <div className="absolute flex flex-col h-full items-center justify-center left-0 top-0 gap-8 bg-gradient-to-r lg:pl-28 from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <h1 className="text-3xl lg:text-6xl lg:w-[60%] text-white text-start font-bold">Join Our Community of VolunteerHub</h1>
      <p className="text-white text-start">Join us and make a difference. Explore volunteer opportunities in various fields. <br /> Together, we create positive change</p>
          <Link className="btn text-white lg:mr-96 lg:-ml-20 w-fit bg-[#FF3811] border-none" to="">Become A Volunteer</Link>

    </div>
  </div>
</SwiperSlide>
            {/* ------------------ banner 2 ------------------- */}
            <SwiperSlide className="carousel w-full">
  <div className="carousel-item relative  w-full flex flex-col justify-center items-center">
    <img
      src="/public/banner-2.jpg"
      className="w-full rounded-lg"
    />
    <div className="absolute flex flex-col h-full items-center justify-center left-0 top-0 gap-8 bg-gradient-to-r lg:pl-28 from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <h1 className="text-3xl lg:text-6xl lg:w-[70%] text-start text-white font-bold">Meet Our Incredible Volunteers</h1>
      <p className="text-white text-start">Discover the faces behind our impact. Our volunteers drive change, inspire hope, <br /> and make a difference. Join us in our mission to create a brighter tomorrow.</p>
          <Link className="btn text-white w-fit bg-[#FF3811] lg:mr-96 lg:-ml-20 border-none" to=""> Get Volunteers</Link>

    </div>
  </div>
</SwiperSlide>
            {/* ------------------ banner 3 ------------------- */}
            <SwiperSlide className="carousel w-full">
  <div className="carousel-item relative  w-full flex flex-col justify-center items-center">
    <img
      src="/public/banner-3.jpg"
      className="w-full h-full rounded-lg"
    />
    <div className="absolute flex flex-col h-full items-center justify-center left-0 top-0 gap-8 bg-gradient-to-r lg:pl-28 from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <h1 className="text-3xl lg:text-6xl lg:w-[60%] text-white text-start font-bold">Become a Donor, Transform Lives</h1>
      <p className="text-white text-start">Your donation changes lives. Join us in making a difference. Together, <br /> we create hope and opportunity for all.</p>
          <Link className="btn text-white w-fit bg-[#FF3811] lg:mr-96 lg:-ml-5 border-none" to="">Become A Donner</Link>

    </div>
  </div>
</SwiperSlide>


        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
