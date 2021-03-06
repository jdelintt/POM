import React, { useContext, useState } from 'react';
import API from "./../../utils/API";
import { AuthContext } from './../../context/AuthContext';
import {useHistory, Redirect} from "react-router-dom";
import SeniorImage from '../../utils/SVG/SeniorSVG';
import '../../utils/SVG/SeniorSVG.css';
import "./Login.css";
import Header from "../../components/Header/Header.js";


const Login = props => {
    let history = useHistory();
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
                return
                }
        })
    }

    const handleSignup = (event) => {
        event.preventDefault()
        history.push("/signup")


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
                <button onClick = {handleSignup} type = "submit" className="login">
                    Signup
                </button>
                </h1>
            </form>
            <hr class="rounded"></hr>
        </div>
    
    )
}

export default Login;