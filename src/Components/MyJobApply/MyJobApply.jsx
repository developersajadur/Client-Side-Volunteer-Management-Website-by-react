import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const MyJobApply = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [myApplyPost, setMyApplyPost] = useState([]);
    console.log(myApplyPost);

    useEffect(() => {
        if (email) {
            axios.get(`http://localhost:5000/request-job/${email}`)
                .then(res => setMyApplyPost(res?.data))
        }
    }, [email]);
    return (
        <div>
            
        </div>
    );
};

export default MyJobApply;