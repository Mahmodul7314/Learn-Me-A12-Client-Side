import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
// import SingleTopCourse from "../../../Components/SingleTopCourse/SingleTopCourse";
import MySingleClass from "./MySingleClass";




const MyClass = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure();
    
    const {data: courses = []} = useQuery({
        queryKey: ['courses', user.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/courses/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-5xl"> My Course: {courses.length}</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 lg:gap-y-0 md:gap-y-3 gap-y-4'>
        {
            courses.map(course=><MySingleClass key={course._id} course={course}
            ></MySingleClass>)
        }
        </div>

            <div className="flex justify-center py-40"><Link className="btn btn-warning" to="/">GO Home</Link></div> 
        </div>
    );
};

export default MyClass;