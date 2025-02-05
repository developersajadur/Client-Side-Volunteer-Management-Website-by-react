import { Link, NavLink } from "react-router-dom";
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { Helmet } from "react-helmet";

const MyJobPost = () => {
    const axiosSecure = useAxios();
    const { user } = useAuth();
    const email = user?.email;
    const [myJobPosts, setMyJobPosts] = useState([]);

    useEffect(() => {
        if (email) {
            axiosSecure.get(`/volunteers-post/user/${email}`, { withCredentials: true })
                .then(res => setMyJobPosts(res?.data))
                .catch(err => console.error("Error fetching job posts:", err));
        }
    }, [email, axiosSecure]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/volunteers-post/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            setMyJobPosts(myJobPosts.filter(spot => spot._id !== id));
                        } else {
                            Swal.fire({
                                title: "Error!",
                                text: "Failed to delete the post.",
                                icon: "error"
                            });
                        }
                    })
                    .catch(err => {
                        console.error("Error deleting post:", err);
                        Swal.fire({
                            title: "Error!",
                            text: "An error occurred while deleting the post.",
                            icon: "error"
                        });
                    });
            }
        });
    };

    return (
        <div>
            <Helmet>
                <title>My Post</title>
            </Helmet>

            <div className="carousel-item relative my-10 lg:h-96 rounded-lg w-full flex flex-col justify-center items-center">
                <img
                    src="page-top-img.jpg"
                    className="w-full rounded-lg lg:h-96"
                    alt="carousel"
                />
                <div className="absolute flex flex-col rounded-lg h-full items-center justify-center left-0 top-0 gap-8 bg-gradient-to-r pl-16 lg:pl-28 from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h1 className="text-3xl lg:text-6xl text-white font-bold">
                        Your Posted Jobs
                    </h1>
                </div>
            </div>
            {myJobPosts.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Post Title</th>
                                <th>Email</th>
                                <th>Volunteers Needed</th>
                                <th>Deadline</th>
                                <th>Show, Edit, Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myJobPosts.map((myJobPost, index) => (
                                <tr key={myJobPost._id} className="hover font-bold">
                                    <th>{index + 1}</th>
                                    <th>{myJobPost.postTitle || "Not Found"}</th>
                                    <th>{myJobPost.email || "Not Found"}</th>
                                    <td>{myJobPost.volunteersNeeded || "Not Found"}</td>
                                    <td>{myJobPost.deadline || "Not Found"}</td>
                                    <td>
                                        <div className="flex gap-5">
                                            <Link to={`/volunteer-details/${myJobPost._id}` || "/"} className="p-4 rounded-xl text-xl text-white bg-[#a4855d]"><FiEye /></Link>
                                            <NavLink to={`/update-job/${myJobPost._id}` || "/"} className="p-4 rounded-xl text-xl text-white bg-[#ffa938]"> <FaPen /></NavLink>
                                            <button onClick={() => handleDelete(myJobPost._id)} className="p-4 rounded-xl text-xl text-white bg-[#82561b]"><MdDelete /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-2xl lg:text-6xl font-bold text-center">No job posts found.</div>
            )}
        </div>
    );
};

export default MyJobPost;
