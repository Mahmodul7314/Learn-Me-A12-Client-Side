import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";




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

            <div className="flex justify-center py-40"><Link className="btn btn-warning" to="/">GO Home</Link></div> 
        </div>
    );
};

export default MyEnrollClass;