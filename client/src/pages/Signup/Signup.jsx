import React, { useState, useRef, useEffect } from 'react';
import API from "./../../utils/API";
import {useHistory} from "react-router-dom"


const Signup = props => {
    // let history = useHistory();
    const [user, setUser] = useState({ username: "", password: "", firstName: "", lastName: "", role: "", email : "" })


    const handleInputChange = (event) => {
        event.preventDefault()
        setUser({ ...user, [event.target.name]: event.target.value })
        console.log(user)
    }
    const handleLogin = (event) => {
        event.preventDefault()
        console.log("this is before")
        console.log(user)
        API.signup(user).then(res => {
            console.log(res)
            resetForm();
            // history.push("/login")


        })
    }

    const resetForm = () => {
        setUser({ firstName: "", lastName: "", role: "", username: "", password: "", email : "" })
    }

    return (
        <div>
            <form>
                <h3>Sign Up</h3>
                <label htmlFor="username"> Username: </label>
                <input
                    type="text"
                    name="username"
                    value = {user.username}
                    onChange={handleInputChange}
                    placeholder="Username"
                ></input>
                <label htmlFor="password"> Password: </label>
                <input
                    type="password"
                    name="password"
                    value = {user.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                ></input>
                <label htmlFor="firstNAme"> first name: </label>
                <input
                    type="text"
                    name="firstName"
                    value = {user.firstName}
                    onChange={handleInputChange}
                    placeholder="name first"
                ></input>
                <label htmlFor="lastName"> last name: </label>
                <input
                    type="text"
                    name="lastName"
                    value = {user.lastName}
                    onChange={handleInputChange}
                    placeholder="last name"
                ></input>
                <label htmlFor="role"> role: </label>
                <input
                    type="text"
                    name="role"
                    value = {user.role}
                    onChange={handleInputChange}
                    placeholder="role"
                ></input>
                <button onClick={handleLogin} type="submit">
                    Signup
                </button>
            </form>
        </div>

    )
}

export default Signup;