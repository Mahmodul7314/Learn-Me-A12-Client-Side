import { Link } from "react-router-dom";
import useCourses from "../../Hooks/useCourses";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";




const AllClasses =()=> {
   const [courses,refetch] =useCourses([])
   const axiosSecure =useAxiosSecure();




   const handleAcceptCourse = course => {
     axiosSecure
       .patch(`/accept/${course._id}`)
       .then((res) => {
         console.log(res.data);
         if (res.data.modifiedCount > 0) {
           refetch();
           Swal.fire({
             position: "top-end",
             icon: "success",
             title: `${course.title} is accepted`,
             showConfirmButton: false,
             timer: 2000,
           });
         }
       })
       .catch((error) => {
         console.error('Error accepting course:', error);
         // Handle the error as needed (e.g., show an error message to the user)
       });
   };
   const handleReject = course => {
     axiosSecure
       .patch(`/reject/${course._id}`)
       .then((res) => {
         console.log(res.data);
         if (res.data.modifiedCount > 0) {
           refetch();
           Swal.fire({
             position: "top-end",
             icon: "success",
             title: `${course.title} is Rejected`,
             showConfirmButton: false,
             timer: 2000,
           });
         }
       })
       .catch((error) => {
         console.error('Error accepting course:', error);
         // Handle the error as needed (e.g., show an error message to the user)
       });
   };
    return (
        <div className="py-20">
       <div>
            <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                <tr>
                    <th>
                 
                    </th>
                    <th>Image</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {courses.map((course, index)=><tr key={course._id}>
                    <td>
                      {index + 1}
                    </td>
                    <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={course.image} />
                        </div>
                        </div>
                        <div>
                        
                        </div>
                    </div>
                    </td>
                    <td>
                        {course.title}
                    </td>
                    <td className="text-right">${course.price}</td>
                    <td className="text-right text-gray-600 font-bold">{course.status}</td>
                    <td className="text-right">${course.email}</td>
                  
                  <td><button onClick={()=> handleAcceptCourse(course)}
                      className=" "><span className="btn btn-warning">accept</span>
                      </button></td>  
                      <td> <button onClick={()=>handleReject(course)}
                      className=""><span className="btn btn-accent">Reject</span>
                      </button></td>
                     
                    <td>
                    {/* <button onClick={()=> handleDeleteItem(course)}
                    className="btn btn-ghost btn-lg"><FaTrash className="text-red-600 bg-white"></FaTrash>
                    </button> */}
                    </td>
                </tr>) }
                
                </tbody>
            
            </table>
            </div>
            </div>  

            <div className="flex justify-center py-40"><Link className="btn btn-warning" to="/">GO Home</Link></div> 
        </div>
    );
};

export default AllClasses;