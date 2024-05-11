import { useLoaderData } from "react-router-dom";

const VolunteerDetails = () => {
    const volunteer = useLoaderData()
    console.log(volunteer?._id);
    return (
        <div>
            
        </div>
    );
};

export default VolunteerDetails;