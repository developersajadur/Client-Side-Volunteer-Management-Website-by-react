import { Link } from "react-router-dom";

const FlexMenuCard = ({volunteer}) => {
    const {
        thumbnail,
        postTitle,
        category,
        volunteersNeeded,
        deadline,
        location,
        _id,
      } = volunteer;
    return (
        <div className="table w-full h-20 border border-warning">
         <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={thumbnail}alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{postTitle}</div>
              <div className="text-sm opacity-50">{location}</div>
            </div>
          </div>
        </td>
        <td>
         <h4 className="font-bold">Deadline: {deadline}</h4>
        </td>
        <td>
            <h4 className="font-bold">Vacancy: {volunteersNeeded}</h4>
        </td>
        <th>
        <Link
              to={`/volunteer-details/${_id}`}
              className=" text-white px-6 py-2 rounded-lg font-semibold bg-[#FF5528]"
            >
              View
            </Link>
        </th>
      </tr>
        </div>
    );
};

export default FlexMenuCard;