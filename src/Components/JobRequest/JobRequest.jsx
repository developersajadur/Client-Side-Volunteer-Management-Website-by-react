import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import {  NavLink } from "react-router-dom";
import { BiBlock } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";
const JobRequest = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [jobRequests, setJobRequests] = useState([]);
    console.log(jobRequests);

    useEffect(() => {
        if (email) {
            axios.get(`http://localhost:5000/request-job/${email}`)
                .then(res => setJobRequests(res?.data))
        }
    }, [email]);
// -------------handleChangeStatus--------------
const handleChangeStatus = (id, previousStatus , status) => {
    if(status === previousStatus) {
        toast.error("Already updated");
        return;
    }
    axios.patch(`http://localhost:5000/job/${id}`, { status })
        .then(res => {
            if (res.data.modifiedCount > 0) {
                toast.success("Job Status updated successfully");
            }
        })
}
    const handleReject = (id) => {
        handleChangeStatus(id, "pending", "Rejected");
    }
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
                      Job Requests
                    </h1>
                </div>
            </div>

            {/* ------------------------------------- */}
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobRequests.map((jobRequest, index) => (
                            <tr key={jobRequest._id} className="hover font-bold">
                                <th>{index + 1}</th>
                                <th>{jobRequest.name}</th>
                                <th>{jobRequest.email}</th>
                                <td>{jobRequest.number}</td>
                                <td>{jobRequest.status}</td>
                                <td>
                                    <div className="flex gap-5">
                                        <button onClick={() => handleChangeStatus(jobRequest._id, jobRequest.status, "In Progress")} className="p-4 rounded-xl text-xl text-white bg-[#ffa938]"> <FaCheck /></button>
                                        <button onClick={() => handleReject(jobRequest._id, jobRequest.status, "Rejected")} className="p-4 rounded-xl text-xl text-white bg-[#82561b]"><BiBlock /></button>
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

export default JobRequest;