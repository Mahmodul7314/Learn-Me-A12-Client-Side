import { Link } from "react-router-dom";


const MyEnrollClass = () => {
    return (
        <div>
            <h3 className="text-5xl">My Enroll class</h3>





            <div className="flex justify-center py-40"><Link className="btn btn-warning" to="/">GO Home</Link></div> 
        </div>
    );
};

export default MyEnrollClass;