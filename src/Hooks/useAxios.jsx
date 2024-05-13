import axios from "axios";
import useAuth from "./useAuth";
import { Navigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000/",
    withCredentials: true,
});

const useAxios = () => {
    const { logOutUser } = useAuth();

    // interceptors
    axiosSecure.interceptors.request.use(
        res => {
            return res;
        },
        async error => {
            if (error.response.status === 401 || error.response.status === 403) {
                await logOutUser();
                Navigate("/login"); 
            }
            return Promise.reject(error);
        }
    );

    return axiosSecure;
};

export default useAxios;
