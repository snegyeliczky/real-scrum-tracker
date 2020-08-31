import axios from 'axios'

export default {

    register : async (user)=>{
        let response = await axios.post("http://localhost:8081/auth/registration",user,{
            withCredentials: true,
            SameSite:"none"
        });
        return response;
    },

    login : async (user) =>{
        let axiosResponse = await axios.post("http://localhost:8762/auth/signin",user,{
            withCredentials: true,
            SameSite:"none"
        });
        return axiosResponse;
    },

    logout : async () =>{
        let axiosResponse = await axios.get("http://localhost:8762/auth/logout");
        return axiosResponse;
    }
}