import { useContext } from "react";
import {Navigate , useLocation} from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user , loading} = useContext(AuthContext)

    if(loading){
        return <div className="text-center mt-20">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if(!user){
        return <Navigate to="/login" state={location?.pathname || "/"}/>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;