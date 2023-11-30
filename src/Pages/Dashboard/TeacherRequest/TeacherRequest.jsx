import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrash,  } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { key } from 'localforage';
// import { FaTrash, FaUsers } from "react-icons/fa6";


const TeacherRequest = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/teachers');
            return res.data;
        }
    })

 

    const handleMakeTeacher= user =>{
        axiosSecure.patch(`/users/teacher/${user.email}`)
        .then(res =>{
          console.log(res.data)
          if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title:`${user.name} is a Teacher now`,
              showConfirmButton: false,
              timer: 2000
            });
          }
            
        })
    }

    const handleReject= user =>{
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
            axiosSecure.delete(`/users/teacher/${user._id}`)
                .then(res =>{
                    if(res.data.deletedCount > 0){
                        refetch();
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
        <div className="flex justify-evenly my-y">
          
            <h2 className="text-3xl pt-12 pb-8">Total Teacher Request: {users.length}</h2>
        </div>
        <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>Experience</th>
        <th>Title</th>
        <th>Category</th>
        <th>Status</th>
        <th>Approved</th>
        <th>Reject</th>
      </tr>
    </thead>
    <tbody>
       {
        users.map((user, index )=>  <tr key={user._id}>
            <th>{index+1}</th>
            <td><img src={user.image} alt="" /></td>
            <td>{user.name}</td>
            <td>{user.experience}</td>
            <td>{user.title}</td>
            <td>{user.category}</td>
            <td>{user.status}</td>
            
            <td>
            { user.role ==='teacher'? 'teacher':<button onClick={()=> handleMakeTeacher(user)}
                 className=""><span className="btn btn-outline btn-success text-lg font bold text-green-600">Approve</span>
                  </button>
              
            }
            </td>
            <td>
            <button onClick={()=> handleReject(user)}
             className="btn btn-ghost btn-lg"><FaTrash className="text-red-600 bg-white"></FaTrash>
              </button>
            </td>
          </tr>)
       }
    </tbody>
  </table>
</div>
<div className="flex justify-center py-40"><Link className="btn btn-warning" to="/">GO Home</Link></div> 
        </div>
    );
};

export default TeacherRequest;