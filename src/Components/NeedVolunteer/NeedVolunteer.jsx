
import { useLoaderData } from 'react-router-dom';
import VolunteerPostCard from './VolunteerPostCard';

const NeedVolunteer = () => {
    const volunteers = useLoaderData();
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    volunteers?.map( volunteer => <VolunteerPostCard
                    key={volunteer?._id}
                    volunteer={volunteer}
                    ></VolunteerPostCard>)
                }
            </div>
        </div>
    );
};

export default NeedVolunteer;