import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import EnrollSingleClass from "./EnrollSingleClass";





const MyEnrollClass = () => {

   
        const axiosSecure = useAxiosSecure();
        const {data: classes = [], refetch} = useQuery({
            queryKey: ['classes'],
            queryFn: async() =>{
                const res = await axiosSecure.get('/enrollclass');
                return res.data;
            }
        })
    
     
    return (
        <div>
            <h3 className="text-5xl py-12">My Enroll class</h3>
           
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-y-6 md:gap-y-3 gap-y-4'>
        {
            classes.map(course=><EnrollSingleClass key={course._id} course={course}
            ></EnrollSingleClass>)
        }
        </div>
            <div className="flex justify-center py-40"><Link className="btn btn-warning" to="/">GO Home</Link></div> 
        </div>
    );
};

export default MyEnrollClass;