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
            <h3 className="text-5xl">My Enroll class</h3>
            <div>{classes.length}</div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 lg:gap-y-0 md:gap-y-3 gap-y-4'>
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