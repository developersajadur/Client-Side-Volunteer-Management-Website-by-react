import { useState, useEffect } from "react";
import { BiBlock } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { Helmet } from "react-helmet";

const JobRequest = () => {
    const axiosSecure = useAxios();
    const { user } = useAuth();
    const email = user?.email;
    const [jobRequests, setJobRequests] = useState([]);

    useEffect(() => {
        if (email) {
            axiosSecure.get(`/request-job/${email}`)
                .then(res => setJobRequests(res?.data))
                .catch(err => console.error("Error fetching job requests:", err));
        }
    }, [email, axiosSecure]);

    const handleChangeStatus = (id, previousStatus, status) => {
        if (status === previousStatus) {
            toast.error("Already updated");
            return;
        }
        axiosSecure.patch(`/job/${id}`, { status })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success("Job Status updated successfully");
                    setJobRequests(prevJobRequests => prevJobRequests.map(job => {
                        if (job._id === id) {
                            return { ...job, status };
                        }
                        return job;
                    }));
                }
            })
            .catch(err => console.error("Error updating job status:", err));
    };

    const handleReject = (id, status) => {
        handleChangeStatus(id, status, "Rejected");
    };

    return (
        <div>
            <Helmet>
                <title>Your Job Requests</title>
            </Helmet>

                <div className="carousel-item relative my-10 lg:h-96 rounded-lg w-full flex flex-col justify-center items-center">
                    <img
                        src="page-top-img.jpg"
                        className="w-full rounded-lg lg:h-96"
                        alt="carousel"
                    />
                    <div className="absolute flex flex-col rounded-lg h-full items-center justify-center left-0 top-0 gap-8 bg-gradient-to-r pl-16 lg:pl-28 from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <h1 className="text-3xl lg:text-6xl text-white font-bold">Job Requests</h1>
                    </div>
                </div>

            {jobRequests.length > 0 ? (
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
                                    <td>{index + 1}</td>
                                    <td>{jobRequest.name || "Not Found"}</td>
                                    <td>{jobRequest.email|| "Not Found"}</td>
                                    <td>{jobRequest.number|| "Not Found"}</td>
                                    <td>{jobRequest.status|| "Not Found"}</td>
                                    <td>
                                        <div className="flex gap-5">
                                            <button onClick={() => handleChangeStatus(jobRequest._id, jobRequest.status, "In Progress")} className="p-4 rounded-xl text-xl text-white bg-[#ffa938]"><FaCheck /></button>
                                            <button onClick={() => handleReject(jobRequest._id, jobRequest.status)} className="p-4 rounded-xl text-xl text-white bg-[#82561b]"><BiBlock /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ):(
                <div className="text-2xl lg:text-6xl font-bold text-center">No job Request found.</div>
            )}
        </div>
    );
};

export default JobRequest;
