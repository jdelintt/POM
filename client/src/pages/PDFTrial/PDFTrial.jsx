import React, { useContext, useEffect, useState } from 'react';
import API from "./../../utils/API";
import { AuthContext } from './../../context/AuthContext';
import { useHistory, Redirect } from "react-router-dom"

const PDF = props => {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState({ADirFileType : "", ADirFile: ""})

    useEffect(() => {

        if (user) {
            if (user.username) {
                API.getUser(user.username).then(res => {
                    setUserData(res)
                })
            }

        }


    }, [user])

    const handleEmailSubmit = (data) => {
        API.emailSubmit(data)
        .then(res => {
            console.log(res)
        })
    }
    
    return (
        <div>
            <h1>Advanced Directive</h1>
            {userData.ADirFileType.includes("image") ? <img src={userData.ADirFile} /> : <iframe src={userData.ADirFile} type={userData.ADirFileType} />}
            <button onClick = {() => handleEmailSubmit(userData)}>Submit</button>            
        </div>

    )
}

export default PDF;