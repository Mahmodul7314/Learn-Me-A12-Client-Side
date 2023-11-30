import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
const SignIn = () => {
const navigate = useNavigate();
  const{signIn}=useContext(AuthContext);

    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        
        signIn(email,password)
       .then(result =>{
        const user = result.user;
        // console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your sign In Seccessfull",
          showConfirmButton: false,
          timer: 1500
          });
          navigate('/');
          form('')
       })
        
    }
    return (
        <div>
              <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="text-center lg:w-1/2 md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold pl-10 pb-8">Login now!</h1>
            <img className="" src="https://cdn.ostad.app/images/homepage/illustrations/login.svg" alt="" />
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
            
              <div className="form-control mt-6">
                {/* ToDO : apply desable */}
                  <input className="btn btn-warning" type="submit" value="Sign In" />
              </div>
            </form>
            <p className="text-center py-4"><small>New Here? <Link to="/signup" className="font-bold text-green-500">Create an Account</Link></small></p>
             <p className="text-center"><SocialLogin></SocialLogin></p> 
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default SignIn;