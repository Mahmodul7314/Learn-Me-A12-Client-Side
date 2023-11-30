
import { useEffect, useState } from 'react';
import useCourses from './../../Hooks/useCourses';
import SingleTopCourse from '../SingleTopCourse/SingleTopCourse';

const TopCourses = () => {
  const [course,setCourse] =useState([]);
  const [courses] = useCourses();
useEffect(()=>{
    courses.map(course=>{
        const reviews = course.reviews;
        const sortCourse =courses.sort((a,b)=> b.reviews - a.reviews).slice(0,4);
        // console.log(sortCourse)
       setCourse(sortCourse)
    
      })

},[courses])

// console.log(course)

  return (
    <div className='pb-8 pt-20'>
        <h2 className='text-4xl text-center font-bold text-gray-800 pt-8 pb-16'>Popular Courses</h2>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 lg:gap-y-0 md:gap-y-3 gap-y-4'>
        {
            course.map(course=><SingleTopCourse key={course._id} course={course}
            ></SingleTopCourse>)
        }
        </div>
       
    </div>
  );
};

export default TopCourses;
