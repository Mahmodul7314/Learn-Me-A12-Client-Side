import { NavLink, Outlet } from "react-router-dom";
import { MdClass } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaHandHolding, FaUsers } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { MdOutlineClass } from "react-icons/md";
import useAdmin from "../Hooks/useAdmin";
import useTeacher from "../Hooks/useTeacher";
const DashBoard = () => {
// let isAdmin= true;
  
 const[isAdmin] =useAdmin();
const [isTeacher]=useTeacher();
    return (
        < >
          <div className="bg-amber-50"><h2 className="text-center font-bold text-4xl text-yellow-600">My Dashboard</h2></div>
        <div className="flex px-8 bg-amber-50">
          
            <div className="w-64 min-h-screen bg-yellow-500">
              <ul className="space-y-4">
                
              { 
                   isAdmin?
                    <>
            
                   <li >
                      
                       <NavLink to="/dashboard/teacherrequest" className="flex items-center text-lg px-8"><FaHandHolding></FaHandHolding>Teacher Request</NavLink>
                    </li>
                   <li>
                      
                       <NavLink to="/dashboard/allusers" className="flex items-center text-lg px-8"><FaUsers></FaUsers>Users</NavLink>
                    </li>
                   <li>
                      
                       <NavLink to="/dashboard/classes" className="flex items-center text-lg px-8"><MdClass></MdClass>All Classes</NavLink>
                    </li>
                   <li>
                      
                       <NavLink to="/dashboard/profile" className="flex items-center text-lg px-8"><CgProfile></CgProfile>Profile</NavLink>
                    </li>
           
                  
                    </>
                    :

                    isTeacher?
                    <>
                    <li><NavLink to="/dashboard/addclass" className="flex items-center text-lg px-8"><IoAddCircle></IoAddCircle>Add Class</NavLink></li>
                    <li><NavLink to="/dashboard/myclass" className="flex items-center text-lg px-8"><MdOutlineClass></MdOutlineClass>My Class</NavLink></li>
                    <NavLink to="/dashboard/teacherprofile" className="flex items-center text-lg px-8"><CgProfile></CgProfile>Profile</NavLink>
                  
                    </>
                    

                    :
                    <>
                    <li><NavLink to="/dashboard/enrollclass"className="flex items-center text-lg px-8"><MdOutlineClass></MdOutlineClass>My Enroll Class</NavLink></li>
                    <NavLink to="/dashboard/studentprofile" className="flex items-center text-lg px-8"><CgProfile></CgProfile>Profile</NavLink>
                  
                    </>
                       
                       }
               
                
              </ul>


            </div>
            <div className="flex-1 px-8">
                <Outlet></Outlet>
            </div>
            
        </div>
        </>
    );
  
};

export default DashBoard;