import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";



const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit,reset, formState:{errors} } = useForm()
    const {createUser,updateUserProfile} =useContext(AuthContext)
    const navigate = useNavigate();

    
    const onSubmit = data =>{
        // console.log(data)
        createUser(data.email,data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            updateUserProfile(data.name,data.photoURL)
            .then(()=>{
                 //create user entry in the database
                 const userInfo ={
                    name: data.name,
                    email: data.email,
                    image:data.photoURL
                 }
                 axiosPublic.post('/user', userInfo)
                 .then(res =>{
                    if(res.data.insertedId){
                        console.log('user added to the database')
                        reset();
                        Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: "Your sign Up Seccessfull",
                          showConfirmButton: false,
                          timer: 1500
                          });
                          navigate('/');
                    }
                 })
                 
            })
            .catch(error => console.log(error))
        })

    } ;

    // const onSubmit = data =>{
    //     // console.log(data)
    //     createUser(data.email,data.password)
    //     .then(result =>{
    //         const loggedUser = result.user;
    //         console.log(loggedUser)
    //         updateUserProfile(data.name,data.photoURL)
    //         .then(()=>{
    //              //create user entry in the database
    //              const userInfo ={
    //                 name: data.name,
    //                 email: data.email
    //              }
                
    return (
        <div>
              <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ">
                    <h1 className="text-5xl font-bold pb-10 pl-14">SignUp!</h1>
                    <img className="" src="https://cdn.ostad.app/images/homepage/illustrations/login.svg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name",{ required: true })} placeholder="name" className="input input-bordered" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" {...register("photoURL",{ required: true })} placeholder="Photo URL" className="input input-bordered" />
                        {errors.photoURL && <span className="text-red-600">Photo is required</span>}
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email",{ required: true })} placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { 
                            required: true, 
                            minLength:6,
                            maxLength: 20,
                            pattern:/(?=.*[a-z])(?=.*[A-Z])(?=.*[#$@!%&*?])(?=.*[0-9])/
                            })} placeholder="password" className="input input-bordered"  />
                        {errors.password?.type == 'required' && <span className="text-red-600">Password is required</span>}
                        {errors.password?.type == 'minLength' && <span className="text-red-600">Password must be 6 character</span>}
                        {errors.password?.type == 'maxLength' && <span className="text-red-600">Password must be under 20 character</span>}
                        {errors.password?.type == 'pattern' && <span className="text-red-600">Password must be one Uppercase One lowercase one special character and one number</span>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-yellow-500" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className="pb-10 text-lg text-center"><small>Already Have an Account? Please <Link className="text-lg font-bold" to='/signin'>Login</Link></small></p>
                    {/* <SocialLogin></SocialLogin> */}
                    </div>
                </div>
                 
            </div>
        </div>
    );
};

export default SignUp;