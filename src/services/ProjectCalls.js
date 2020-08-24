import axios from 'axios'

export default {


    getCompanyWithAllProjects : async (userCredentials)=>{
        let axiosResponse = await axios.post("http://localhost:8762/company-service/company-with-projects",userCredentials);
        return axiosResponse;
    }

}