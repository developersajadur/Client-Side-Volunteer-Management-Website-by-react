import { Helmet } from "react-helmet";

const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault();
       
    }
    return (
        <div>
            <Helmet>
               <title>
              Contact With Us
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
                        Contact With Us
                    </h1>
                </div>
            </div>

        <div className="flex flex-col gap-12 lg:flex-row">
            <div className="1/2">
                <img src="contact-img.png" alt="" />
            </div>
            <div className="1/2">
                <h1 className="text-2xl lg:text-4xl font-bold text-start mb-5">Our Volunteer Become Us <br />
This Contact Now!</h1>
<p className="text-start font-medium text-lg mb-10">Poor address a range of simply application and infrastructure this <br /> of passages of available  but the majority have suffered poor <br /> alteration in some form.</p>

<form onSubmit={handleSubmit} className="flex flex-col gap-8">
    <div className="flex flex-col lg:flex-row gap-8">
    <input required type="text" placeholder="Your Name" className="input input-bordered input-warning w-full" />
    <input required type="email" placeholder="Your Email" className="input input-bordered input-warning w-full" />
    </div>
    <div className="flex flex-col lg:flex-row gap-8">
    <input required type="number" placeholder="Your Number" className="input input-bordered input-warning w-full" />
    <input required type="Subject" placeholder="Subject" className="input input-bordered input-warning w-full" />
    </div>
    <textarea required className="textarea w-full h-40 textarea-warning" placeholder="Write Your Massage"></textarea>
    <button className="btn bg-[#FFA415] text-lg font-bold text-white">Send Request</button>
</form>
            </div>
        </div>

        </div>
    );
};

export default Contact;