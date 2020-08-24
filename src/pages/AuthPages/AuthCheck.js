import React from 'react';
import { useHistory } from 'react-router-dom';

export default function(OriginalComponent, isPrivate ) {

    function AuthCheck() {
        const user = localStorage.getItem("userData");
        const history = useHistory();

        if (isPrivate && user === null) {
            alert("please log in ");
            history.push("/auth");
        }
        return <OriginalComponent />
    }

    return AuthCheck;
};

