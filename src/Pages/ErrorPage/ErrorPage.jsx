import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center bg-amber-50">
            <div><h2 className="text-4xl text-center font-bold text-red-500">Oops This is Error Page</h2></div>
            <div className="flex justify-center py-40"><Link className="btn btn-warning" to="/">GO Home</Link></div> 
        </div>
    );
};

export default ErrorPage;