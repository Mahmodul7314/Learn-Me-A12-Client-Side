/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const SingleAllClasses = ({course}) => {
    const {title, image, name,email,price, description,enroll, reviews, _id} = course || {};



   
        const axiosSecure =useAxiosSecure();
        const handleEnroll = (_id, course) => {
          console.log(_id);
        
          axiosSecure
            .post(`/enroll/${_id}`)
            .then((res) => {
              console.log(res.data);
        
              // eslint-disable-next-line no-undef
              if (res.data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${course.title} is Enrolled`,
                  showConfirmButton: false,
                  timer: 2000,
                });
              } else {
                console.error("Enrollment was not successful");
                // Handle the case where enrollment was not successful
                // You might want to show an error message to the user
              }
            })
            .catch((error) => {
              console.error('Error enrolling in the course:', error);
              // Handle the error as needed (e.g., show an error message to the user)
            });
        };
    


    return (
        <div>
            <div className="card bg-base-100 shadow-xl lg:px-0 md:px-0 px-6 h-[38rem]">
            <figure className="h-[14rem]"><img src={image} alt="Shoes" /></figure>
            <div className="card-body h-[28rem]">
                <h2 className="card-title">{title}</h2>
               <div>
               <p>{name}</p>
                <p>{email}</p>
                </div> 
                <div className="text-sm font-normal text-justify space-y-2"> Description: {description}</div>
                <div className="text-yellow-500 font-bold">Price:{price} $</div>
                <div className="flex justify-around">
                    <p className="text-gray-600 font-bold">Enroll: {enroll}</p>
                    <p className="text-gray-600 font-bold">Reviews: {reviews}</p>
                </div>
               
            </div>
            <div className="card-actions justify-center py-6">
            <button onClick={()=>handleEnroll(_id)} className="btn btn-warning">Enroll Now</button>
                </div>
        </div>
        </div>
    );
};

export default SingleAllClasses;