import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
  const {googleSignIn} = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

     const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
            const userInfo ={
              name:result.user.name,
              email:result.user?.email,
              image:result.user?.photoURL

            }
            axiosPublic.post('/user',userInfo)
            .then(res =>{
              console.log(res.data)
              navigate('/');
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your sign In Seccessfull",
                showConfirmButton: false,
                timer: 1500
                })
            })
         
             
          
        })
  }


    return (
        <div className="p-8">
              <div className="divider"></div>
            <div>
            <button onClick={handleGoogleSignIn} className="btn btn-warning">
               <FaGoogle className="mr-2"></FaGoogle>
               Google
              </button>
            </div>
        </div>
    );
};

export default SocialLogin;