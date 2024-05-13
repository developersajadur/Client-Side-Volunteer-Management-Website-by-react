import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Keyboard,FreeMode } from 'swiper/modules';
import { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const Reviews = () => {
    const {user} = useAuth();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
        .then(res => res.json())
        .then(data => setReviews(data))
    },[]);

    return (
        <div className="mt-20 flex flex-col justify-center">
             <h1 className="text-2xl lg:text-5xl mb-10 font-bold text-center">Our Satisfied Clients</h1>
             <div className="">
             <Swiper
        spaceBetween={30}
        breakpoints={{
            480: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 50
            },
            720:{
                slidesPerView: 2,
                spaceBetween: 50
            }
        }}
        
        freeMode={true}
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        keyboard={true}
        modules={[FreeMode, Pagination,Keyboard, Autoplay]}
        className="mySwiper "
        >
             {
             Array.isArray(reviews) && reviews?.map(testimonial =>
                <SwiperSlide
                key={testimonial.id}
                >
                <div className="card my-10 review-card w-full text-start bg-white text-black">
                            <div className="card-body">
                            <div className="avatar">
                            <div className="w-16 rounded-full">
                              <img src={user?.photoURL || "/user-img.png"}/>
                            </div>
                          </div>
                          <p>{testimonial.review}</p>
                              <h2 className="card-title text-2xl font-bold">{testimonial.client_name}</h2>
                              <h5 className='text-lg font-semibold'>{testimonial.address}</h5>
                              <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                          </div>
                              
                            </div>
                          </div>
                </SwiperSlide>
            )
        }
        </Swiper>
             </div>
         
        </div>
    );
};

export default Reviews;
