import React, { useContext, useState } from 'react';
import API from "./../../utils/API";
import { AuthContext } from './../../context/AuthContext';
import {useHistory} from "react-router-dom"

const Login = props => {
    let history = useHistory();
    const [user, setUser] = useState({ username: "", password: "" })
    const [message, setMessage] = useState(null)
    const authContext = useContext(AuthContext);

    const handleInputChange = (event) => {
        event.preventDefault()
        setUser({...user, [event.target.name] : event.target.value})
        console.log(user)
    }
    const handleLogin = (event) => {
        event.preventDefault()
        API.login(user).then(res => {
            console.log(res)
            const {isAuthenticated, user, msg} = res;
            if (isAuthenticated) {
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
              }
              history.push("/landing")

        })
    }

    return (
        <div>
            <form>
                <h3>Sign In</h3>
                <label htmlFor="username"> Username: </label>
                <input
                    type="text"
                    name="username"
                    onChange={handleInputChange}
                    placeholder="Username"
                ></input>
                <label htmlFor="password"> Password: </label>
                <input
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    placeholder="Password"
                ></input>
                <button onClick = {handleLogin} type = "submit">
                    Login
                </button>
            </form>
        </div>

    )
}

export default Login;