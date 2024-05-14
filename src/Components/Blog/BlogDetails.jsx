
import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {

    const blogs = useLoaderData() 
    const {blogId} = useParams()
    const blog = blogs.find (blog => blog.id == blogId);
    const {banner,short_title , big_description, description} = blog;
    return (
        <div className="mt-10 px-2 lg:px-10">
          <Helmet>
            <title>
              { short_title }
            </title>
          </Helmet>
          <div className="carousel-item relative my-10 lg:h-96 rounded-lg w-full flex flex-col justify-center items-center">
                <img
                    src="/page-top-img.jpg"
                    className="w-full rounded-lg lg:h-96"
                    alt="carousel"
                />
                <div className="absolute flex flex-col rounded-lg h-full items-center justify-center left-0 top-0 gap-8 bg-gradient-to-r pl-16 lg:pl-28 from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h1 className="text-3xl lg:text-6xl text-white font-bold">
                        Blog Details
                    </h1>
                </div>
            </div>
            <div className="card w-full p-0">
  <figure><img className="h-full lg:h-96 w-full lg:w-[100%]" src={banner} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl lg:text-6xl font-bold">{short_title}</h2>
    <h3 className="text-xl lg:text-3xl font-bold">{description}</h3>
    <p>{big_description}</p>
    <div className="card-actions justify-center mt-10">
      <Link to="/blogs"><button className="btn bg-[#E7A500]">Go Back</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default BlogDetails;