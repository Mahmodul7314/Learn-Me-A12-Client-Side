


import { useForm } from "react-hook-form";



// import useAxiosSecure from "../../Hooks/useAxiosSecure";



import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddClass = () => {
   
   const {user} = useAuth() || {};
  const email = user && user.email;
    const { register, handleSubmit } = useForm();
   const axiosPublic = useAxiosPublic();
   
    const onSubmit = async (data) =>{
      console.log(data);
      //image upload to imgbb and then get an url
      const imageFile = {image: data.image[0]}
      const res = await axiosPublic.post(image_hosting_api,imageFile,{
        headers:{
          'content-type' : 'multipart/form-data'
        }
      }); 
      if(res.data.success){
        //now send the menu item data to the server with the image url
        const Info = {
          name: data.name,
         price: data.price,
          title: data.title,
          status:data.status,
          email:data.email,
          description: data.description,
          image: res.data.data.display_url
        }
        
        const Infores = await axiosPublic.post('/course',Info);
        console.log(Infores.data)
        if(Infores.data.insertedId){
          //show success popup
      
          Swal.fire({
            position: "top-end",
            icon: "success",
            title:`${data.title} is added to the courseCollection.`,
            showConfirmButton: false,
            timer: 1500
          });
        }
  
      }
       console.log(res.data,'with image url');
    }
    return (
        <div className="px-14 py-10">
        <div className="border border-yellow-600">
       
        <div className="w-[40rem] mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-4">
            <div className="form-control w-1/2 ">
              <label className="label">
                <span className="label-text"> Name</span>
              </label>
              <input 
          
                type="text"
                defaultValue={user.displayName}
               
                placeholder="Your Name"
                {...register('name',{required:true})}
                className="input input-bordered w-full bg-yellow-200 "
              />
            </div>
           
                
            <div className="form-control w-1/2 ">
              <label className="label">
                <span className="label-text"> Price</span>
              </label>
              <input 
                type="number"
                placeholder="Price"
                {...register('price',{required:true})}
                className="input input-bordered w-full bg-yellow-200 "
              />
            </div>
             </div>

          
             <div className="flex gap-6">
              <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Title of Course </span>
              </label>
              <input
                type="text"
                placeholder="Title"
                {...register('title',{required:true})}
                className="input input-bordered w-full bg-yellow-200 "
              />
           
            </div>
              <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Status </span>
              </label>
              <input
                type="text"
            
                placeholder="Status"
                defaultValue="pending"
                {...register('status',{required:true})}
                className="input input-bordered w-full bg-yellow-200 "
              />
           
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Email</span>
              </label>
              <input
                type="email"
              
                placeholder=" Your user email"
                defaultValue={email}
                {...register('email',{required:true})}
                className="input input-bordered w-full bg-yellow-200 "
              />
           
            </div>
            </div>
            <div className="form-control">
                 <label className="label">
                    <span className="label-text">Course Description</span>
                   </label>
                 <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
             </div>
               <div className="form-control w-full my-6 ">
               <input type="file" {...register('image',{required:true})} className="file-input bg-yellow-200 w-full      max-w-xs" />
               </div>
               <div className="flex justify-center py-6"> <button className="btn btn-block bg-green-400 my-6">Add Class</button></div>
           
          </form>
        </div>
      </div>
      </div>
    );
};

export default AddClass;