import { useEffect, useState } from 'react';
import CollaborateLogo from './../../../Components/CollaborateLogo/CollaborateLogo';

const Collaborates = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch('/collaborates.json')  
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);  
      });
  }, []);

  return (
    <div className=' pt-28 pb-14'>
        <h2 className='text-center text-4xl text-gray-900 font-bold py-6'>Our Top collaborators</h2>
         <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-3 gap-4 px-4'>
      {datas.map((data) => (
        <CollaborateLogo key={data.id} data={data}></CollaborateLogo>
      ))}
    </div>
    </div>

   
  );
};

export default Collaborates;
