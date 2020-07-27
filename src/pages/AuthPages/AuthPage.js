import React, {createRef, useState} from 'react';
import AuthCalls from "../../services/AuthCalls";

const AuthPage = () => {
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
        console.log(response)
    };

    const  handleLogin=async ()=> {
        let user = {"username":username,
            "password": password,
        };
        let response = await AuthCalls.login(user);
        console.log(response);
    };

    return (
        <div>
            <div>
                <h2>Register</h2>
                <input placeholder={"username"} ref={regUsername}/>
                <input placeholder={"password"} ref={regPassword}/>
                <input placeholder={"email"} ref={regEmail}/>
                <button onClick={handleReg}>Register</button>
            </div>
            <div>
                <h2>Login</h2>
                <input placeholder={"username"} onChange={event => setUserName(event.target.value)}/>
                <input placeholder={"password"} onChange={event => setPassword(event.target.value)}/>
                <button onClick={handleLogin}>login</button>
            </div>
        </div>
    );
};

export default AuthPage;