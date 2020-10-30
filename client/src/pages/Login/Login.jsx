import React, { useContext, useState } from 'react';
import API from "./../../utils/API";
import { AuthContext } from './../../context/AuthContext';

const Login = props => {
    // let  = useHistory();
    const [user, setUser] = useState({ username: "", password: "" })
    const authContext = useContext(AuthContext);

    const handleInputChange = (event) => {
        event.preventDefault()
        setUser({...user, [event.target.name] : event.target.value})
    }
    const handleLogin = (event) => {
        event.preventDefault()
        API.login(user).then(res => {
            const {isAuthenticated, user} = res;
            if (isAuthenticated) {
                console.log(user)
                API.getUser(user)
                .then(res => {
                    authContext.setUser(res);
                    
                })
                authContext.setIsAuthenticated(isAuthenticated);


              }

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