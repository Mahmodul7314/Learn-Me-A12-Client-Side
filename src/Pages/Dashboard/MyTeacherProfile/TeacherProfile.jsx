import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const Profile = () => {
    const {user} =useAuth() || {};
   
    return (
        <div className="">  
       
        <div className="py-20 pl-40">
       <div className="flex flex-col justify-center max-w-xs p-6 shadow-md bg-yellow-200 rounded-xl sm:px-12  text-gray-800">
	<img src={user.photoURL}alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{user.displayName}</h2>
			<p className="px-5 text-xs sm:text-base text-gray-400">{user.email}</p>
			<p className="px-5 text-xs sm:text-base text-gray-400">Teacher</p>
		</div>
	</div>
  </div>
 </div>
 <div className="flex justify-center py-40"><Link className="btn btn-warning" to="/">GO Home</Link></div> 
 </div>
    );
};

export default Profile;