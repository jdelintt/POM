import React, { createContext, useState, useEffect } from "react";
import API from "./../utils/API"

export const AuthContext = createContext()

function Auth (props) {
    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(true);


    useEffect(() => {
        API.isAuthenticated().then(data => {
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
            API.getUser(data.user.username)
            .then(res => {
                setUser(res)
            })
        })

    }, [])

    return (
        <div>
            {!isLoaded ? <h1>...Loading</h1> :
                <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
                    {props.children}
                </AuthContext.Provider>}
        </div>

    )

}

export default Auth;