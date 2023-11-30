/* eslint-disable react/prop-types */


const CollaborateLogo = ({data}) => {
    
    return (
        <div>
            <div>
            <div><img src={data.logo} alt="" /></div>
            <p className=" font-normal text-gray-700">{data.description}</p>
            </div>     
        </div>
    );
};

export default CollaborateLogo;