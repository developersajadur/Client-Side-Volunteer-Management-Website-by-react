import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import Swal from "sweetalert2";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyJobPost = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [myJobPosts, setMyJobPosts] = useState([]);

    useEffect(() => {
        if (email) {
            axios.get(`http://localhost:5000/volunteers-post/user/${email}`)
                .then(res => setMyJobPosts(res?.data))
                .catch(err => console.error("Error fetching job posts:", err));
        }
    }, [email]);

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
                axios.delete(`http://localhost:5000/volunteers-post/${id}`)
                    .then(res => res.data)
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            setMyJobPosts(myJobPosts.filter(spot => spot._id !== id));
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
            <div className="carousel-item relative my-10 lg:h-96 rounded-lg w-full flex flex-col justify-center items-center">
                <img
                    src="/public/page-top-img.jpg"
                    className="w-full rounded-lg lg:h-96"
                    alt="carousel"
                />
                <div className="absolute flex flex-col rounded-lg h-full items-center justify-center left-0 top-0 gap-8 bg-gradient-to-r pl-16 lg:pl-28 from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h1 className="text-3xl lg:text-6xl text-white font-bold">
                        Your Posted Jobs
                    </h1>
                </div>
            </div>
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
                                <th>{myJobPost.postTitle}</th>
                                <th>{myJobPost.email}</th>
                                <td>{myJobPost.volunteersNeeded}</td>
                                <td>{myJobPost.deadline}</td>
                                <td>
                                    <div className="flex gap-5">
                                        <Link to={`/volunteer-details/${myJobPost._id}`} className="p-4 rounded-xl text-xl text-white bg-[#a4855d]"><FiEye /></Link>
                                        <NavLink to={`/update-job/${myJobPost._id}`} className="p-4 rounded-xl text-xl text-white bg-[#ffa938]"> <FaPen /></NavLink>
                                        <button onClick={() => handleDelete(myJobPost._id)} className="p-4 rounded-xl text-xl text-white bg-[#82561b]"><MdDelete /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobPost;
