import { Link } from "react-router-dom";


const TeachOn = () => {
    return (
        <div>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse lg:gap-28">
  <div className="w-1/2">
      <h1 className="text-5xl font-bold">Become an Instructor</h1>
      <p className="py-6 text-gray-800 font-normal text-lg">Instructors from around the world teach millions of learners on Learn Me. We Provides the tools and skills to teach what you love.</p>
      <Link to="/teachon" className="btn btn-warning">Start Teaching Today</Link>
    </div>
    <div className="w-2/2">
    <img src="https://i.ibb.co/Dgs5MgG/istockphoto-1160926571-612x612.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    </div>
  </div>
</div>
        </div>
    );
};

export default TeachOn;