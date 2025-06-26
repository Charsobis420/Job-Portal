import axios from "axios"
import { removeUser } from "../Slices/UserSlice";
const base_url = "http://localhost:8080/auth/"

const loginUser = async (login:any) => {
    return axios.post(`${base_url}login`, login)
    .then(result => result.data)
    .catch(error=>{throw error;});
}

const navigateToLogin = (navigate:any) => {
    localStorage.removeItem('token');
    removeUser();
    navigate('/login');
}

export {loginUser}