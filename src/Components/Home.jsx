import { Helmet } from "react-helmet";
import Banner from "./HomePage/Banner";
import Faq from "./HomePage/Faq";
import HomeJobPost from "./HomePage/HomeJobPost";
import Reviews from "./HomePage/Reviews";
import HomePageBlogs from "./Blog/HomePageBlogs";



const Home = () => {
    return (
        <div>
              <Helmet>
                Welcome VolunteerHub
              </Helmet>
            <Banner></Banner>
            <HomeJobPost></HomeJobPost>
            <Reviews></Reviews>
            <HomePageBlogs></HomePageBlogs>
            <Faq></Faq>
        </div>
    );
};

export default Home;