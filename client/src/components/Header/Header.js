import React from 'react';
import "../Header/Header.css";
import {Row, Button} from 'antd'
import API from "./../../utils/API";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../context/AuthContext";
import {useHistory} from 'react-router-dom'






function Header() {
const { setIsAuthenticated } = useContext(AuthContext);

let history = useHistory()


const handleLogout = () => {
    API.logout().then(res => {
      console.log(res)
      setIsAuthenticated(false);
    })
      .then(() => {
        history.push("/")

      })
  }

    return (
            <div className="mainHeader glass">

                <Row
                                justify="start"
                                >
                                   <Button
                                   onClick={handleLogout}
                                   >
                                       Logout
                                   </Button>
                                </Row>
                <div className="header-container">
                    <div className="row">
                        <div className="col-md-11 text-center">
                            <h1 className="POM">Peace of Mind</h1>
                                </div>
                            <div className="col-md-1">
                                
                            
                            </div>
                    </div>
                </div>
            </div>
    )
}

export default Header;