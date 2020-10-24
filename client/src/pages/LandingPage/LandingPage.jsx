import React from "react";
// import axios from "axios";
import { useAuth } from "../../utils/auth/"
// import API from "../../utils/axios/API";
import './LandingPage.css';
import {Row, Col, Input} from 'antd'
import SeniorImage from '../../utils/SVG/SeniorSVG'
import 'antd/dist/antd.css'

const LandingPage = () => {
    const { user, logout } = useAuth();
    const fullName = (user) => `${user.firstName} ${user.lastName}`
    return (
      <>
        <section id="parallax-world-of-ugg">
                  <button onClick={logout}>Logout</button>
        <section>
          <div className="title">
        <h3>{user.username}</h3>
    <h1>{fullName(user)}</h1>
          </div>
        </section>
        </section>
        <Row
        justify="center"
        >
          <Col span={4} offset={6}>
          
          Hello
          </Col>
          <div>
            <SeniorImage></SeniorImage>
          </div>
         
        
        </Row>

        <Row
        justify="center">
          <Input></Input>
        </Row>
        

        {/* <section onClick={() => API().then(x => console.log(x.data))}>Try clicking this now and open your console, then delete your token from your localstorage and try to click the button again</section> */}
        







        <Row
justify="center"
>
    <p>Peer to Peer lending for loans under $500</p>
    
</Row>
        </>
    )
};

export default LandingPage;