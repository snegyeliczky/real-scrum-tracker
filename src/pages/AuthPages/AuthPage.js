import React, {createRef, useState} from 'react';
import AuthCalls from "../../services/AuthCalls";
import {useHistory} from "react-router-dom";
import "../../assets/styles/AuthStyle.css" ;

const AuthPage = () => {

    const history = useHistory();
    const regUsername = createRef();
    const regPassword = createRef();
    const regEmail = createRef();

    const [username,setUserName] = useState();
    const [password,setPassword] = useState();

    const handleReg = async () =>{
        let user = {"username":regUsername.current.value,
                    "password": regPassword.current.value,
                    "email": regEmail.current.value
        };
        let response = await AuthCalls.register(user);
        try {
            if (response.status===200){
                alert("registration success!")
                handleLogin(regUsername.current.value,regPassword.current.value)
            }
        }catch(e){
            console.log(e);
            alert("registration failed! Invalid username or password")
        }
    };

    const  handleLogin=async (username,password)=> {
        let user = {"username":username,
            "password": password,
        };
        try {
            let response = await AuthCalls.login(user);
            if (response.status===200){
                localStorage.setItem("userData",JSON.stringify(response.data));
                history.push("/");
            }
        }catch (e) {
            console.log(e);
            alert("Login failed! Invalid username or password")
        }
    };

    return (
        <div>
            <div className={"auth-container"}>
                <h2>Register</h2>
                <input placeholder={"username"} ref={regUsername}/>
                <input placeholder={"password"} ref={regPassword}/>
                <input placeholder={"email"} ref={regEmail}/>
                <button onClick={handleReg}>Register</button>
            </div>
            <div className={"auth-container"}>
                <h2>Login</h2>
                <input placeholder={"username"} onChange={event => setUserName(event.target.value)}/>
                <input placeholder={"password"} onChange={event => setPassword(event.target.value)}/>
                <button onClick={event => handleLogin(username,password)}>login</button>
            </div>
        </div>
    );
};

export default AuthPage;