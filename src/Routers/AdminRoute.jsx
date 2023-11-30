/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";

import useAdmin from "../Hooks/useAdmin";





const AdminRoute = ({children}) => {

    const [isAdmin, isAdminLoading] = useAdmin();
  

    const location = useLocation();

    if(isAdminLoading){
        return <progress className='progress w-56'></progress>
    }

    if(isAdmin ){
        return children;
    }
    return <Navigate to="/" state={{from:location}} replace></Navigate>
       
};

export default AdminRoute;