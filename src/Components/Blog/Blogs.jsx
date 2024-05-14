import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";
import { Helmet } from "react-helmet";
const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className="px-1 lg:px-10 mt-10 lg:mt-20">
            <Helmet>
                <title>
                    Explore Our Blogs
                </title>
            </Helmet>
            <div className="carousel-item relative my-10 lg:h-96 rounded-lg w-full flex flex-col justify-center items-center">
                <img
                    src="page-top-img.jpg"
                    className="w-full rounded-lg lg:h-96"
                    alt="carousel"
                />
                <div className="absolute flex flex-col rounded-lg h-full items-center justify-center left-0 top-0 gap-8 bg-gradient-to-r pl-16 lg:pl-28 from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h1 className="text-3xl lg:text-6xl text-white font-bold">
                       Our Latest Blogs
                    </h1>
                </div>
            </div>
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-12 mt-10  ">
            {
               Array.isArray(blogs) && blogs?.map(blog => <Blog
                key={blog.id}
                blog={blog}
                ></Blog>)
            }
        </div>
        </div>
    );
};

export default Blogs;