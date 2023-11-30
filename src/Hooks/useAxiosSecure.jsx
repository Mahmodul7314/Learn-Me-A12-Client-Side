import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import useAuth from './useAuth';
const axiosSecure = axios.create({
    baseURL: 'https://learn-me-server.vercel.app'
})
const useAxiosSecure = () => {
//     const navigate = useNavigate() ;
//    const {logOut} = useAuth()





   return axiosSecure;
};

export default useAxiosSecure;