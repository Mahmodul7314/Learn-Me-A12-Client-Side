import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";


const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('signin') || location.pathname.includes('signup');
    return (
        <div className="max-w-screen-xl mx-auto">
           {noHeaderFooter || <Navbar></Navbar>  }
            <Outlet></Outlet>
           {noHeaderFooter|| <Footer></Footer>}
        </div>
    );
};

export default MainLayout;