import { Link } from "react-router-dom";


const StudentProfile = () => {
    return (
        <div>
            <h2 className="text-5xl">My Student Profile</h2>






            <div className="flex justify-center py-40"><Link className="btn btn-warning" to="/">GO Home</Link></div> 
        </div>
    );
};

export default StudentProfile;