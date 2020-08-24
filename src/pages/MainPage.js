import React, {useEffect} from 'react';
import ProjectCalls from "../services/ProjectCalls";

const MainPage = () => {

    function getUserFromLocalstorage() {
        let userCred = localStorage.getItem("userData");
        return JSON.parse(userCred)
    }

    const getCompanyWithProjects = async (userCredentials)=>{
        let companyWithAllProjects =  await ProjectCalls.getCompanyWithAllProjects(userCredentials);
        console.log(companyWithAllProjects.data)
    };

    useEffect(()=>{
        let userFromLocalstorage = getUserFromLocalstorage();
        console.log(userFromLocalstorage);
        getCompanyWithProjects(userFromLocalstorage);
    },[]);

    return (
        <div>
            Hello {getUserFromLocalstorage().username}
        </div>
    );
};

export default MainPage;