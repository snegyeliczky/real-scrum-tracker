import axios from 'axios'

export default {

    register : async (user)=>{
        let response = await axios.post("http://localhost:8081/auth/registration",user);
        return response;
    },

    login : async (user) =>{
        let axiosResponse = await axios.post("http://localhost:8762/auth/signin",user,{withCredentials: true} );
        return axiosResponse;
    }
}