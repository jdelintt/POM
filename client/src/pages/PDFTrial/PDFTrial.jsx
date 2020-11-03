import React, { useContext, useEffect, useState } from 'react';
import API from "./../../utils/API";
import { AuthContext } from './../../context/AuthContext';
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';


const PDF = props => {
    const { user, setUser } = useContext(AuthContext);
    const [email, setEmail] = useState()


    const handleEmailSubmit = (data) => {
        API.emailSubmit(data)
            .then(res => {
                console.log(res)
            })

        API.userUpdate(user)
            .then(res => {
                console.log(res)

            })
    }

    const handleInputChange = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }

    const addEmail = (e) => {
        e.preventDefault()
        setUser({ ...user, emails: [...user.emails, email] })
        setEmail("")


    }


    const removeItem = (event, index) => {
        event.preventDefault()
        user.emails.splice(index, 1)
        setUser({ ...user })
        setEmail("")
    }

    console.log(user)



    return (
        <div>
            <h1>Advanced Directive</h1>
            {user.ADirFileType.includes("image") ? <img src={user.ADirFile} /> : <iframe src={user.ADirFile} type={user.ADirFileType} />}
            <Popup modal trigger={<button>Click here to send</button>} position="center">
                <form>
                    <label htmlFor="email">Enter Email</label>
                    <input onChange={(e) => handleInputChange(e)} type="text" name="email1" placeholder="Enter Email" value={email}></input>
                    <button onClick={addEmail}>Add</button>
                    {user.emails.map((item, index) => {
                        console.log(index)
                        return (
                            <div key={index}>
                                <p>
                                    {item}
                                </p>
                                <button onClick={(e) => removeItem(e, index)}>Remove</button>
                            </div>
                        )
                    })}
                </form>
                <button onClick={() => {
                    handleEmailSubmit(user);
                }}>Send</button>

            </Popup>
            
        </div>

    )
}

export default PDF;