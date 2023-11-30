import { Link } from "react-router-dom";
import useCourses from "../../Hooks/useCourses";
import SingleAllClasses from "./SingleAllClasses";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import Swal from "sweetalert2";
// import SingleAllClasses from "./SingleAllClasses";
// import { key } from 'localforage';




const AllClasses =()=> {
   const [courses,refetch] =useCourses([])
   const filteredCourses =courses.filter(course => course.status ==='accepted')
  //  const axiosSecure =useAxiosSecure();




  //  const handleAcceptCourse = course => {
  //    axiosSecure
  //      .patch(`/accept/${course._id}`)
  //      .then((res) => {
  //        console.log(res.data);
  //        if (res.data.modifiedCount > 0) {
  //          refetch();
  //          Swal.fire({
  //            position: "top-end",
  //            icon: "success",
  //            title: `${course.title} is accepted`,
  //            showConfirmButton: false,
  //            timer: 2000,
  //          });
  //        }
  //      })
  //      .catch((error) => {
  //        console.error('Error accepting course:', error);
  //        // Handle the error as needed (e.g., show an error message to the user)
  //      });
  //  };
  //  const handleReject = course => {
  //    axiosSecure
  //      .patch(`/reject/${course._id}`)
  //      .then((res) => {
  //        console.log(res.data);
  //        if (res.data.modifiedCount > 0) {
  //          refetch();
  //          Swal.fire({
  //            position: "top-end",
  //            icon: "success",
  //            title: `${course.title} is Rejected`,
  //            showConfirmButton: false,
  //            timer: 2000,
  //          });
  //        }
  //      })
  //      .catch((error) => {
  //        console.error('Error accepting course:', error);
  //        // Handle the error as needed (e.g., show an error message to the user)
  //      });
  //  };
    return (
        <div className="py-20">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          {
            filteredCourses.map(course=><SingleAllClasses key={course._id} course={course}
            ></SingleAllClasses>)
        }

          </div>
      
            <div className="flex justify-center py-40"><Link className="btn btn-warning" to="/">GO Home</Link></div> 
        </div>
    );
};

export default AllClasses;