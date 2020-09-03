import React, {useCallback, useEffect, useState} from 'react';
import "../../src/assets/styles/main.css";
import {useParams} from "react-router";
import ProjectCalls from "../services/ProjectCalls";

const ProjectPage = () => {

    const {id} = useParams();
    const [project,setProject] = useState();


    const getProject = async (projectId)=>{
        let projectById = await ProjectCalls.getProjectById(projectId);
        return projectById.data
    };



    const saveProject = useCallback( ()=>{
        getProject(id)
            .then(response =>{
                console.log(response);
                setProject(response)})
    },[id]);

    useEffect(()=>{
        saveProject();
        },[saveProject]
    );

    return (
        <div>
            <h2 className={"welcome"}>{project==null?"loading":
                project.name}</h2>

        </div>
    );
};

export default ProjectPage;