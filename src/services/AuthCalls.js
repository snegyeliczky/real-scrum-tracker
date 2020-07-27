import axios from 'axios'

export default {

    register : async (user)=>{
        let response = await axios.post("http://localhost:8080/auth/registration",user);
        return response.data;
    },

    login : async (user) =>{
        let axiosResponse = await axios.post("http://localhost:8080/auth/signin",user);
        return axiosResponse.data;
    }
}