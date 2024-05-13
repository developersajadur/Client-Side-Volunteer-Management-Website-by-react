import Banner from "./HomePage/Banner";
import Faq from "./HomePage/Faq";
import HomeJobPost from "./HomePage/HomeJobPost";
import Reviews from "./HomePage/Reviews";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeJobPost></HomeJobPost>
            <Reviews></Reviews>
            <Faq></Faq>
        </div>
    );
};

export default Home;