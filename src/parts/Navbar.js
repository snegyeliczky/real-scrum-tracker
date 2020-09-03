import React from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import AuthCalls from "../services/AuthCalls";
import {useHistory} from "react-router-dom";

const Navbar = () => {

    const history = useHistory();

    async function logout() {
        await AuthCalls.logout();
        localStorage.clear();
        history.push("/auth");
    }

    async function goHome() {
        history.push("/");
    }

    return (
        <Menu mode="horizontal" style={{textAlign:'center'}}>
            <Menu.Item onClick={logout}>Log Out</Menu.Item>
            <Menu.Item onClick={goHome}>Home</Menu.Item>

        </Menu>
    );
};

export default Navbar;