import { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { Helmet } from "react-helmet";

const MyJobApply = () => {
    const axiosSecure = useAxios();
    const { user } = useAuth();
    const email = user?.email;
    const [myApplyPosts, setMyApplyPosts] = useState([]);

    useEffect(() => {
        if (email) {
            axiosSecure.get(`/my-request-job/${email}`)
                .then(res => setMyApplyPosts(res?.data))
        }
    }, [email, axiosSecure]);

    return (
        <div>
            <Helmet>
                <title>My Applied Jobs</title>
            </Helmet>
            <div className="carousel-item relative my-10 lg:h-96 rounded-lg w-full flex flex-col justify-center items-center">
                <img
                    src="page-top-img.jpg"
                    className="w-full rounded-lg lg:h-96"
                    alt="carousel"
                />
                <div className="absolute flex flex-col rounded-lg h-full items-center justify-center left-0 top-0 gap-8 bg-gradient-to-r pl-16 lg:pl-28 from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h1 className="text-3xl lg:text-6xl text-white font-bold">My Applied Jobs</h1>
                </div>
            </div>
            
            {myApplyPosts.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Number</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myApplyPosts.map((myApplyPost, index) => (
                                <tr key={myApplyPost._id} className="hover font-bold">
                                    <th>{index + 1}</th>
                                    <th>{myApplyPost.name || "Not Found"}</th>
                                    <th>{myApplyPost.email || "Not Found"}</th>
                                    <td>{myApplyPost.number || "Not Found"}</td>
                                    <td>{myApplyPost.status || "Not Found"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-2xl lg:text-6xl font-bold text-center">No applied jobs found.</div>
            )}
        </div>
    );
};

export default MyJobApply;
