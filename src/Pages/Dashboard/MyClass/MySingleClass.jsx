/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */

// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import useCourses from "../../../Hooks/useCourses";
// import { FaTrash } from "react-icons/fa";


const MySingleClass = ({course}) => {
  const {image,title,name,email,description,price,enroll,reviews} = course;
//   const {image,title,name,email,description,price,enroll,reviews} = course;

    // const { refetch} = useCourses();
    // const axiosSecure = useAxiosSecure();

    // const handleUpdateCourse= course =>{
    //     axiosSecure.patch(`/course/${course._id}`)
    //     .then(res =>{
    //       console.log(res.data)
    //       if(res.data.modifiedCount > 0){
    //         refetch();
    //         Swal.fire({
    //           position: "top-end",
    //           icon: "success",
    //           title:`${course.title} is Updated `,
    //           showConfirmButton: false,
    //           timer: 2000
    //         });
    //       }
            
    //     })
    // }

  
   
    // const handleDelete= course =>{
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //         axiosSecure.delete(`/course/${course._id}`)
    //             .then(res =>{
    //                 if(res.data.deletedCount > 0){
    //                     refetch()
    //                     Swal.fire({
    //                     title: "Deleted!",
    //                     text: "Your file has been deleted.",
    //                     icon: "success"
    //                 });
    //               }
    //             })
    //         }
    //       });

    // }







    return (
        <div>
            <div>
            <div className="card bg-base-100 shadow-xl lg:px-0 md:px-0 px-6">
            <figure><img src={course.image} alt="Shoes" /></figure>
            <div className="card-body h-[26rem]">
                <h2 className="card-title">{course.title}</h2>
               <div>
               <p>{course.name}</p>
                <p>{course.email}</p>
                </div> 
                <div className="text-sm font-normal text-justify space-y-2"> Description: {course.description}</div>
                <div className="text-yellow-500 font-bold">Price:{course.price} $</div>
                <div className="flex justify-around">
                    <p className="text-gray-600 font-bold">Enroll: {course.enroll}</p>
                    <p className="text-gray-600 font-bold">Reviews: {course.reviews}</p>
                </div>
                <div className="card-actions justify-center pt-8">
                <button className="btn btn-warning">Enroll Now</button>
                </div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default MySingleClass;