/* eslint-disable react/no-unknown-property */


const Banner = () => {
    return (
        <div className="bg-[#E1F0ED] py-20 mx-14 border border-gray-700 rounded-3xl">
            <div className="mainbanner lg:flex  items-center relative px-8">
                <div className="lg:w-1/2 md:w-full">
                <h2 className="text-black lg:text-4xl md:text-4xl text-xl font-bold flex items-center">Lern Skill with Live Class<span class="relative ml-4 flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-90"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span> </h2>
                    <p className="text-2xl font-bold py-8">
                        Become job-ready through module-based <br />
                        study plans and guided journeys</p>
                        <button className="btn btn-warning">Learn Free</button>
                        <p className="text-xl font-normal">More than 1000 Graduate doing Job with Our Mentorship and Support </p>


                </div>
                <div className="lg:w-1/2 md:w-full relative">
                    <div className="relative"><img className="rounded-xl opacity-80" src="https://i.ibb.co/bBVLq2D/banner.jpg" alt="" /></div> 
                   <div><h2 className="lg:text-4xl md:text-4xl text-xl text-justify font-bold absolute lg:ml-48 ml-16 md:ml-48 lg:-mt-60 -mt-24 md:-mt-60  text-white"> <span className="text-yellow-600">Learn With</span> <br />Industry Expert</h2></div> 
                </div>

            </div>
            
        </div>
    );
};

export default Banner;