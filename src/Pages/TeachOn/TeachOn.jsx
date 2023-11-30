

import { useForm } from "react-hook-form";


import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import useTeacher from "../../Hooks/useTeacher";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const TeachOn = () => {
const [isTeacher] = useTeacher();
  const {user} =useAuth() || {};
  const email = user && user.email;
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    // const axiosSecure = useAxiosSecure();
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
        const Info= {
          name: data.name,
          experience: data.experience,
          category: data.category,
          title:data.title,
          status:data.status,
          email:data.email,
          image: res.data.data.display_url
        }
        
        const Infores = await axiosPublic.post('/teachers',Info);
        console.log(Infores.data)
        if(Infores.data.insertedId){
          //show success popup
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            // title:`${data.name} is added to the menu.`,
            title:"Request successfully send",
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
        <div className="text-lg text-green-600 font-medium flex justify-center py-6">{isTeacher? "You are Teacher Right Now So Don't Appy ": " Apply Now"}</div>
            <h2 className="font-bold text-4xl text-center py-10">Fillup this form</h2>
        <div className="w-[40rem] mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
  
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text"> Name</span>
              </label>
              <input 
                type="text"
                placeholder="Your Name"
                {...register('name',{required:true})}
                className="input input-bordered w-full bg-yellow-200 "
              />
            </div>
             <div className="flex gap-6">
       
              <select defaultValue="default" {...register("experience",{required:true})}
  
              className="select select-bordered border-gray-300 w-full my-6 bg-yellow-200"
            >
              <option disabled value="default">Select Experience </option>
              <option value="beginner">Beginner</option>
              <option value="experienced">Experienced</option>
              <option value="some idea">Some Idea</option>
        
            </select>
       
              <select defaultValue="default" {...register("category",{required:true})}
  
              className="select select-bordered bg-yellow-200 border-gray-300 w-full my-6 "
            >
              <option disabled value="default">Select a Category </option>
              <option value="web-development">Web Development</option>
              <option value="digital-marketin">Digital Marketing</option>
              <option value="graphic-designer">Graphic Designer</option>
              <option value="seo-specialist">SEO Specialist</option>
              <option value="video-editor">Video Editing</option>
            </select>
       
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
                <span className="label-text"> Email: Must be use your user email </span>
              </label>
              <input
                type="text"
                placeholder="Email must use your user email"
                defaultValue={email}
                {...register('email',{required:true})}
                className="input input-bordered w-full bg-yellow-200 "
              />
           
            </div>
            </div>
               <div className="form-control w-full my-6 ">
               <input type="file" {...register('image',{required:true})} className="file-input bg-yellow-200 w-full      max-w-xs" />
               </div>
               <button className="btn btn-warning my-6">Request For Review</button>
          </form>
        </div>
      </div>
      </div>
    );
};

export default TeachOn;