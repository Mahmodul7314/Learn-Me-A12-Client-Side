
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";



const Navbar = () => {

const {user,loading,logOut}=useAuth();

const handleLogOut =()=>{
 logOut()
   .then(()=>{ })
   .catch(error =>console.log(error))
}



console.log(user);
    const navOptions = <>
      <li className="text-lg font-bold"><Link to="/">Home</Link></li>
      <li className="text-lg font-bold"><Link to="/allclasses">All Classes</Link></li>
      <li className="text-lg font-bold"><Link to="/teachon">Teach on Learn Me</Link></li>
      {/* <li className="text-lg font-bold"><Link to="/login">Login</Link></li> */}
 
   </>
    return (
        <div>
    <div className="navbar h-[20vh] max-w-screen-xl text-black shadow-md mb-20 px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-secondary lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    
        {navOptions}

      </ul>
    </div>
    <a className=" text-5xl font-bold">Edu<span className="text-yellow-500">Forge</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

        {navOptions}

    </ul>
  </div>
  <div className="navbar-end">
  {
        user?
         <>
               <div className="flex items-center gap-6"> 
               <details className="dropdown">
                <summary className="m-1 btn"><span><img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" /></span></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box lg:w-32 w-28 md:w-28">
                    <li><span>Name: <br />{user?.displayName}</span></li>
                    <li><Link to="/dashboard">Dash Board</Link></li>
                    <li><button onClick={handleLogOut} className="bg-yellow-500">Log Out</button></li>
                </ul>
              </details>
               </div> 
              
              </> :
              <>
              <div className="w-60 flex justify-end">  <Link to="/signin" className="btn btn-warning"><span>Sign in</span></Link></div>
             
              </>
      
      }
   

  </div>
</div>
            
        </div>
    );
};

export default Navbar;