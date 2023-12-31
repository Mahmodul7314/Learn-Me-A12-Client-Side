/* eslint-disable react/prop-types */
import React from 'react';

const EnrollSingleClass = ({course}) => {

     const {image,title,name,email,description,price,enroll,reviews} = course;
    return (
        <div>
               <div>
            <div className="card bg-base-100 shadow-xl lg:px-0 md:px-0 px-6">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body h-[26rem]">
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
                <div className="card-actions justify-center pt-8">
                {/* <button className="btn btn-warning">Enroll Now</button> */}
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default EnrollSingleClass;