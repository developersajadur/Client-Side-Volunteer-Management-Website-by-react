
const Faq = () => {
    return (
        <div className="mt-20">
               <h1 className="text-2xl lg:text-4xl text-center font-bold mb-4">Frequently Asked Questions</h1>
               <p className="text-center font-medium text-lg mb-10">Commonly asked questions compiled to provide quick answers and solutions,<br /> addressing common queries and concerns efficiently for users' convenience.</p>
        <div className="flex flex-col lg:flex-row w-full justify-center gap-5 ">
            <div className="lg:w-1/2">
                
                <div className="flex flex-col gap-5">
                <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
  Inspire Raised Why is it important ?
  </div>
  <div className="collapse-content"> 
    <p>There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Start a Fundraiser for Yourself ?
  </div>
  <div className="collapse-content"> 
    <p>Embarking on a personal journey, seeking support to achieve goals. Join me in this meaningful endeavor.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Raised Education Poor Children ?
  </div>
  <div className="collapse-content"> 
    <p>Support education for impoverished children, empowering their futures through access to learning opportunities and resources</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Why is important How Volunteer ?
  </div>
  <div className="collapse-content"> 
    <p>Volunteers are vital for their selflessness, contributing time and skills to support various causes, communities, and organizations, fostering positive change and societal well-being</p>
  </div>
</div>
                </div>
            </div>
            <div className="lg:w-1/2">
                <img className="h-96 w-full rounded-2xl" src="/public/faq-1.jpg" alt="" />
            </div>
        </div>
        </div>
    );
};

export default Faq;