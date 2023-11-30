import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCourses from "../../Hooks/useCourses";

import { FaChalkboardTeacher, FaDiscourse,  FaUsers } from "react-icons/fa";


const States = () => {
	const [courses] = useCourses();
	
	const axiosSecure = useAxiosSecure();
	const {data:users = [], refetch} = useQuery({
        queryKey:['users'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/users',{
              headers:{
                authorization:`Bearer ${localStorage.getItem('access-token')}`
              }
            })
            return res.data;
        }
    })
	const {data:teachers = []} = useQuery({
        queryKey:['teachers'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/teachers')
            return res.data;
        }
    })
    return (
        <div className="px-6 py-14">
            <section className="p-6 my-8 border rounded-xl border-blue-200 shadow-sm text-gray-800">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 border border-gray-300 text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-yellow-400">
				<FaUsers className="w-10 h-10"></FaUsers>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">{users.length}</p>
				<p className="capitalize">Users</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 border border-gray-300 text-gray-800">
		<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-yellow-400">
				<FaDiscourse className="w-10 h-10"></FaDiscourse>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">{courses.length}</p>
				<p className="capitalize">Courses</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 border border-gray-300 text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-yellow-400">
			<FaChalkboardTeacher className="w-10 h-10 "/>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">{teachers?.length}</p>
				<p className="capitalize">Teachers</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 border border-gray-300 text-gray-800">
			<div className="flex justify-center flex-col p-2 align-middle rounded-lg sm:p-4 bg-yellow-400 w-[14rem]">
			<progress className="progress progress-success w-30" value={0} max="100"></progress>
				<progress className="progress progress-success w-30" value={teachers.length} max="100"></progress>
				<progress className="progress progress-success w-30" value={users.length} max="100"></progress>
				<progress className="progress progress-success w-30" value={courses.length} max="100"></progress>
			
			</div>
			{/* <div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">17%</p>
				<p className="capitalize">Bounce rate</p>
			</div> */}
		</div>
	</div>
</section>
        </div>
    );
};

export default States;