import React, {useState} from 'react';
import {CSSTransition} from "react-transition-group";
import "../../src/assets/styles/dropDown.css";

const CompanyWithProjects = ({company}) => {

    const [display,setDisplay] = useState(false);

    const toggle = () => {
        setDisplay(!display)
    };

    return (
            <div>
            <div className="list_item " onClick={toggle}>name: {company.name}</div>
                <div className={"sub-container"}>
                < CSSTransition
                    in={display}
                    timeout={450}
                    classNames="display"
                    unmountOnExit
                >
                    < div
                        className="submenu">
                        <div className={"sublist"}>
                            <div className="sublist-item" >hello</div>
                        </div>
                    </div>
                </CSSTransition>
                </div>
            </div>

    );
};

export default CompanyWithProjects;