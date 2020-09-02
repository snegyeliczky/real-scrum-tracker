import React, {useState} from 'react';
import {CSSTransition} from "react-transition-group";
import "../../src/assets/styles/dropDown.css";
import ProjectCalls from "../services/ProjectCalls";

const CompanyWithProjects = ({company}) => {

    const [display, setDisplay] = useState(false);
    const [projects,setProjects] = useState();

    const toggle = () => {
        setDisplay(!display)
    };

    const getProjectFerCompany  =async () =>{
        let r = await ProjectCalls.getProjectForCompany(company.id);
        return r.data;
    };

    const showProjects = async () =>{
        getProjectFerCompany()
            .then(response =>{setProjects(response)})
            .then(toggle)
    }



    return (
        <div className={"s"}>
            <div className="list_item " onClick={showProjects}>name: {company.name} id: {company.id}</div>
            < CSSTransition
                in={display}
                timeout={345}
                classNames="sub-display"
                unmountOnExit
            >
                        <div className={"sublist"}>
                            {projects!=null?projects.map(project =>{
                                return <div className="sublist-item">{project.name}</div>
                            }):'no projects'}

                        </div>

            </CSSTransition>
</div>


)
    ;
};

export default CompanyWithProjects;