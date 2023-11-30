import axios from 'axios';


const axiosPublic = axios.create({
    baseURL:'https://learn-me-server.vercel.app'
})
const useAxiosPublic = () => {
return axiosPublic;
};

export default useAxiosPublic;