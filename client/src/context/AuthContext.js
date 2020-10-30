import React, { createContext, useState, useEffect } from "react";
import API from "./../utils/API"

export const AuthContext = createContext()

export default (props) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(true);


    useEffect(() => {
        API.isAuthenticated().then(data => {
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
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