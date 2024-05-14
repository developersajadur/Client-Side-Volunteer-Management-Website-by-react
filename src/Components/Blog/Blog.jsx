
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useAuth from "../../Hooks/useAuth";
AOS.init();
const Blog = ({blog}) => {

    const {author,description,short_title,post_date,banner,id} = blog;
    const {user} = useAuth()
    return (
        <div  data-aos="fade-up" data-aos-duration="2000" className="">
            <Link to={`/blog/${id}` || "/"}>
            <div className="card flex w-full border-[1px] border-warning">
  <figure className="px-10 pt-10">
    <img src={banner} className="rounded-xl lg:h-52 lg:w-96" />
  </figure>
  <div className="card-body">
    <div className="flex gap-2 items-center">
    <MdDateRange/>
      <p id="postDate">{post_date || "Not Found"}</p>
    </div>
    <div>
      <h1 className="text-xl font-bold text-[#12132D]">{short_title || "Not Found"}</h1>
    </div>
    <div>
      <p className="p1">{description || "Not Found"} </p>
    </div>

    <div className="flex gap-5 mt-2">
      <div className="avatar">
        <div className="w-14 h-14 rounded-full">
          <img src={user?.photoURL || "user-img.png"} />
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg text-[#12132D]">{author.name || "Not Found"}</h1>
        <p className="p1">{author.job_title || "Not Found"}</p>
      </div>
    </div>
  </div>
</div>
</Link>

        </div>
    );
};

export default Blog;