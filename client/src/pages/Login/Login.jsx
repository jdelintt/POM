import React, { useContext, useState } from 'react';
import API from "./../../utils/API";
import { AuthContext } from './../../context/AuthContext';
import {useHistory, Redirect} from "react-router-dom";
import SeniorImage from '../../utils/SVG/SeniorSVG';
import '../../utils/SVG/SeniorSVG.css';
import "./Login.css";
import Header from "../../components/Header/Header.js";


const Login = props => {
    // let  = useHistory();
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
                return
                }
        })
    }

    return (
        <div class="background">
            <Header></Header>
            <form>
                {/* <h1 className="pom">POM</h1> */}
                <SeniorImage className="logo"></SeniorImage>
                <h1 className="signIn">Sign In</h1>
                <h1>
                <label htmlFor="username"> Username: </label>
                    <br></br>
                <input 
                    className="input"
                    type="text"
                    name="username"
                    onChange={handleInputChange}
                    placeholder="Username"
                ></input><br></br>
                <label htmlFor="password">   Password: </label>
                    <br></br>
                <input
                    className="input"
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    placeholder="Password"
                ></input>
                    <br></br>
                <button onClick = {handleLogin} type = "submit" className="login">
                    Login
                </button>
                </h1>
            </form>
            <hr class="rounded"></hr>
        </div>
    
    )
}

export default Login;