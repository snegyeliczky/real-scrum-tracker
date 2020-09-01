import React, {useState} from 'react';
import ProjectCalls from "../services/ProjectCalls";
import cx from 'classnames';
import "../../src/assets/styles/dropDown.css";
import {CSSTransition} from 'react-transition-group';
import CompanyWithProjects from "../components/CompanyWithProjects";


const MainPage = () => {


    const user = getUserFromLocalstorage();
    const [companies, setCompanies] = useState();
    const [display,setDisplay] = useState(false);

    function getUserFromLocalstorage() {
        let userCred = localStorage.getItem("userData");
        return JSON.parse(userCred)
    }

    const SetCompanyForUser = async (userCredential) =>{
        let r = await ProjectCalls.getCompanyForUser(userCredential);
        return r.data;
    };

    const getProject =()=>{
        SetCompanyForUser(user)
            .then(response =>{setCompanies(response)})
            .then(toggle)

    };



    const toggle = () => {
        setDisplay(!display)
    };


    return (
        <div>
            Hello { user? user.username:'' }<br/>

            <div className="container">
            <button
                className={cx('toggler', {
                    'toggler--active': display,
                })}
                onClick={ ()=>{
                    getProject();
                }}>Show your Companies</button>

                <CSSTransition
                    in={display}
                    timeout={450}
                    classNames="display"
                    unmountOnExit
                >
                    <div className="menu">

                            {
                                companies!=null?companies.map(company =>{
                                    return <CompanyWithProjects company={company} />
                                }):'No Companyes yet'
                            }
                        <div className="list_item">name: blabla</div>
                    </div>
                </CSSTransition>
            </div>

        </div>
    );
};

export default MainPage;