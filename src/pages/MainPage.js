import React, {} from 'react';
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

    const getProject =()=>{
        let userFromLocalstorage = getUserFromLocalstorage();
        console.log(userFromLocalstorage);
        getCompanyWithProjects(userFromLocalstorage);
    };

    return (
        <div>
            Hello {getUserFromLocalstorage().username}<br/>
            <button onClick={getProject}>get project</button>
        </div>
    );
};

export default MainPage;