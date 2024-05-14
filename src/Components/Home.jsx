import { Helmet } from "react-helmet";
import Banner from "./HomePage/Banner";
import Faq from "./HomePage/Faq";
import HomeJobPost from "./HomePage/HomeJobPost";
import Reviews from "./HomePage/Reviews";



const Home = () => {
    return (
        <div>
              <Helmet>
                Welcome VolunteerHub
              </Helmet>
            <Banner></Banner>
            <HomeJobPost></HomeJobPost>
            <Reviews></Reviews>
            <Faq></Faq>
        </div>
    );
};

export default Home;