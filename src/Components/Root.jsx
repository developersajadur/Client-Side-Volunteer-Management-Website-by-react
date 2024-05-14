import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;