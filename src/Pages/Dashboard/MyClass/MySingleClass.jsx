/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCourses from "../../../Hooks/useCourses";
import { FaTrash } from "react-icons/fa";


const MySingleClass = ({course}) => {
    const { refetch} = useCourses();
    const axiosSecure = useAxiosSecure();

    const handleUpdateCourse= course =>{
        axiosSecure.patch(`/course/${course._id}`)
        .then(res =>{
          console.log(res.data)
          if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title:`${course.title} is Updated `,
              showConfirmButton: false,
              timer: 2000
            });
          }
            
        })
    }

  
   
    const handleDelete= course =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            axiosSecure.delete(`/course/${course._id}`)
                .then(res =>{
                    if(res.data.deletedCount > 0){
                        refetch()
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                  }
                })
            }
          });

    }







    return (
        <div>
        <div className="bg-amber-50 card shadow-xl ">
        <figure className="h-[8rem]"><img src={course.image} alt="image" /></figure>
        <div className="card-body py-10 ">
            <h2 className="card-title">{course.title}</h2>
           <div>
           <p className="font-bold">Name:{course.name}</p>
            <p className="text-sm">Email:{course.email}</p>
            </div> 
            <div className="text-sm font-normal text-justify h-[26rem] space-y-2"> Description: {course.description}</div>
            <div className="text-yellow-500 font-bold">Price:{course.price} $</div>
            <div className="flex justify-around">
                <p className="text-gray-600 font-medium">Enroll: {course.enroll}</p>
                <p className="text-gray-600 font-medium">Reviews: {course.reviews}</p>
            </div>
            <div className="card-actions justify-center pt-8">
            <button onClick={()=> handleUpdateCourse(course._id)}
                 className=""><span className="btn btn-outline btn-success text-lg font bold text-green-600">Update</span>
                  </button>

                <button onClick={()=> handleDelete(course)}
                className="btn btn-ghost btn-lg"><FaTrash className="text-red-600 bg-white"></FaTrash>
                </button>

            </div>
        </div>
    </div>
    </div>
    );
};

export default MySingleClass;