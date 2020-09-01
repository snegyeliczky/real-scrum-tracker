import axios from 'axios'
axios.defaults.withCredentials = true;

export default {


    getCompanyWithAllProjects : async (userCredentials)=>{
        let axiosResponse = await axios.post("http://localhost:8762/company-service/company-with-projects",userCredentials);
        return axiosResponse;
    },

    getCompanyForUser: async (userCredentials)=>{
        let response = await axios.post("http://localhost:8762/company-service/company-for-user",userCredentials);
        return response;
    }

}
