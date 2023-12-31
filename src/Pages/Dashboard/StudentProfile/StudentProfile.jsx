import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const StudentProfile = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2 className="text-4xl py-12">My Student Profile</h2>

            <div className="border-yellow-600 border w-1/2  p-6 rounded-xl text-center shadow-md">
                <div  className="flex justify-center"><img className="w-20 h-20 rounded-full"  src={user.photoURL} alt="student-photo" /></div>
                <p className="text-md font-bold py-4">{user.displayName}</p>
                <p>{user.email}</p>
                
            </div>




            <div className="flex justify-center py-40"><Link className="btn btn-warning" to="/">GO Home</Link></div> 
        </div>
    );
};

export default StudentProfile;