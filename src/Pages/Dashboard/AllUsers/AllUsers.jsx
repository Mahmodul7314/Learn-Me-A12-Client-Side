import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";


const AllUsers = () => {
    const axiosSecure =useAxiosSecure();
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
    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
          console.log(res.data)
          if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title:`${user.name} is an Admin now`,
              showConfirmButton: false,
              timer: 2000
            });
          }
            
        })
    }

    return (
        <div>
              <div>
        <div className="flex justify-evenly my-y">
            <h2 className="text-3xl pt-12 pb-8">Total Users: {users.length}</h2>
        </div>
        <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
       {
        users.map((user, index )=>  <tr key={user._id}>
            <th>{index+1}</th>
            <td><img className="w-10 h-10 rounded-full" src={user.image} alt="" /></td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
            { user.role ==='admin'? 'Admin':<button onClick={()=> handleMakeAdmin(user)}
                 className="btn bg-orange-500 btn-lg"><FaUsers className="text-white text-2xl"></FaUsers>
                  </button>
              
            }
            </td>
            {/* <td>
            <button onClick={()=> handleDeleteUser(user)}
             className="btn btn-ghost btn-lg"><FaTrash className="text-red-600 bg-white"></FaTrash>
              </button>
            </td> */}
          </tr>)
       }
    </tbody>
  </table>
</div>
        </div>

          <div className="flex justify-center py-40"><Link className="btn btn-warning" to="/">GO Home</Link></div> 
        </div>
    );
};

export default AllUsers;