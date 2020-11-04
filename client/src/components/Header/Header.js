import React from 'react';
import "../Header/Header.css";
// import API from "./../../utils/API";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "./../../context/AuthContext";
// import {useHistory} from 'react-router-dom'




// const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

// let history = useHistory()
// const handlePDF = () => {
//   history.push("/pdf")

// }

// const handleLogout = () => {
//     API.logout().then(res => {
//       console.log(res)
//       setIsAuthenticated(false);
//     })
//       .then(() => {
//         history.push("/")

//       })
//   }

function Header() {
    return (
            <div className="mainHeader glass">
                <div className="header-container">
                    <div className="row">
                        <div className="col-md-11 text-center">
                            <h1 className="POM">Peace of Mind</h1>
                                </div>
                            <div className="col-md-1">
                            <h2><button className="logOut" 
                            // onClick={handleLogout}
                            >Logout</button></h2>
                            </div>
                    </div>
                </div>
            </div>
    )
}

export default Header;