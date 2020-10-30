import React, { useContext, useEffect, useState } from 'react';
import API from "./../../utils/API";
import { AuthContext } from './../../context/AuthContext';
import { useHistory, Redirect } from "react-router-dom"

const PDF = props => {
    const { user } = useContext(AuthContext);


    const handleEmailSubmit = (data) => {
        API.emailSubmit(data)
            .then(res => {
                console.log(res)
            })
    }

    console.log(user)


    return (
        <div>
            <h1>Advanced Directive</h1>
            {user.ADirFileType.includes("image") ? <img src={user.ADirFile} /> : <iframe src={user.ADirFile} type={user.ADirFileType} />}
            <button onClick={() => handleEmailSubmit(user)}>Submit</button>
        </div>

    )
}

export default PDF;