import React from 'react';
import ProjectCalls from "../services/ProjectCalls";
import AuthCalls from "../services/AuthCalls";
import {useHistory} from "react-router-dom";

const MainPage = () => {

    const history = useHistory();

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
        getCompanyWithProjects(userFromLocalstorage);
    };

    async function logout() {
        await AuthCalls.logout();
        localStorage.clear();
        history.push("/auth");
    }

    return (
        <div>
            Hello {getUserFromLocalstorage().username }<br/>
            <button onClick={getProject}>get project</button>
            <button onClick={logout}>Log Out</button>
        </div>
    );
};

export default MainPage;