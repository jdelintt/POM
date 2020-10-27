import React, { useContext, useEffect, useState } from 'react';
import API from "./../../utils/API";
import { AuthContext } from './../../context/AuthContext';
import { useHistory, Redirect } from "react-router-dom"

const PDF = props => {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState({ADirFileType : "", ADirFile: ""})

    useEffect(() => {

        API.getUser(user.username).then(res => {
            setUserData(res)
        })

    }, [user])

    return (
        <div>
            <h1>Advanced Directive</h1>
            {userData.ADirFileType.includes("image") ? <img src={userData.ADirFile} /> : <embed src={userData.ADirFile} type={userData.ADirFileType} />}

        </div>

    )
}

export default PDF;