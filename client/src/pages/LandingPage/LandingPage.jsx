import React, { useContext, useEffect, useState } from "react";
import API from "./../../utils/API";
import { AuthContext } from "./../../context/AuthContext";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './LandingPage.css';
import Header from "../../components/Header/Header.js";
import {SmileOutlined, UploadOutlined, SaveOutlined, FileDoneOutlined, InfoCircleOutlined, EditOutlined} from '@ant-design/icons'





import ESign from "./../../components/eSign";

import { Row, Col, Card, Upload, message, Divider, Form, Input, Button, Checkbox, Icon } from 'antd'


import SeniorImage from '../../utils/SVG/SeniorSVG';
import PDFCreation from '../Forms/AdvancedDirective';
import 'antd/dist/antd.css';

const styles = {
  JumboStyles: {
    width: "80vw",
    textAlign: "center",
    margin: "40px",
    borderRadius: "10px",
    boxShadow: "12px 12px 19px lightslategray",
    backgroundColor: "#F1F1F1" 
  }
}



const LandingPage = () => {

  const { user } = useContext(AuthContext);

  const [PDF, setPDF] = useState({ base64: "", type: "" });
  const [userData, setUserdata] = useState({})

  useEffect(() => {
    if (user.username) {
      API.getUser(user.username)
        .then(res => {
          setUserdata(res)
        })

    }
  }, [user])

  console.log(userData)


  const fullName = `${user.firstName} ${user.lastName}`
  const { Meta } = Card

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };


  const onFinish = values => {
    console.log('Success:', values);
  };


  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const handleLogout = () => {
    API.logout().then(res => console.log(res))
  }

  const props = {
    name: 'file',
    id: "originalADRUpload",
    headers: {
      authorization: 'authorization-text',
    },
    onChange(e, info) {
      handleBase64(e)

      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: percent => `${parseFloat(percent.toFixed(2))}%`,
    },
  };

  const submitADR = (obj) => {
    API.userUpdate(obj)
      .then(res => {
        console.log(res)
      })
  }


  const handleBase64 = async (event) => {
    console.log(event.target)
    const file = event.target.files[0]
    const basedIt = await convertToBase64(file)
    const pdfArray = await basedIt.split(",")
    const pdfTypeArray1 = await pdfArray[0].split(";")
    const pdfTypeArray2 = await pdfTypeArray1[0].split(":")

    setPDF({ base64: basedIt, type: pdfTypeArray2[1] })
    setUserdata({ ...userData, ADirFile: basedIt, ADirFileType: pdfTypeArray2[1] })


  }


  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)

      fileReader.onload = () => {
        resolve(fileReader.result)
      }

      fileReader.onerror = (err) => {
        reject(err)
      }
    })
  }





            





  return (
    <>
    <Header>
        
      </Header>
        {/* <button onClick={handleLogout}>Logout</button> */}
      
      <section id="parallax-world-of-ugg" >
        <section >
          <div className="title">
            <h1 style={{fontFamily: "Martel, serif", textShadow: "1px 1px 4px #708090"}}>Welcome</h1>
            <h1 style={{fontFamily: "Martel, serif", textShadow: "1px 1px 4px #708090"}}>{user.username}</h1>
            {/* <h1>{fullName(user)}</h1> */}
          </div>
        </section>
      </section>
      <Row
        justify="center" style={{backgroundColor: "#73A481"}} 
      >
        <Col span={7}>
          <SeniorImage></SeniorImage>

        </Col>

      </Row>

      <Row
        justify="center"
        style={{ backgroundColor: "#99CC99" }}
      >
        <section id="instructional-part">
          <div className="ins">
            <h1 id="instructionsHeading">Instructions</h1>
            
          </div>
            <Jumbotron style={styles.JumboStyles} fluid="lg">
            <Container fluid="lg">
          <Col >
              <h1 className="stepHeader">STEP 1</h1> 
              <h1 style={{width: "100%", marginTop: "-2%"}}>
                <EditOutlined />
                </h1>
              <p className="jumboText">
                Fill out the form below.
              </p>
              
          </Col>
          
            </Container>
          </Jumbotron>
          <Jumbotron style={styles.JumboStyles} fluid="lg">
            <Container fluid="lg">
          <Col >
              <h1 className="stepHeader">STEP 2</h1>
              <h1 style={{width: "100%", marginTop: "-2%"}}>
                <InfoCircleOutlined />
                </h1>
              <p className="jumboText">
                Make sure every input has your information and if you are confused about what to put in there, click the "?"
              </p>
          </Col>
            </Container>
          </Jumbotron>
          <Jumbotron style={styles.JumboStyles} fluid="lg">
            <Container fluid="lg">
          <Col >
              <h1 className="stepHeader">STEP 3</h1>
              <h1 style={{width: "100%", marginTop: "-2%"}}>
              <FileDoneOutlined />
              </h1>
              <p className="jumboText">
                Once all the information has been inputted, click "Create Advanced Directive".
              </p>
          </Col>
            </Container>
          </Jumbotron>
          <Jumbotron style={styles.JumboStyles} fluid="lg">
            <Container fluid="lg">
          <Col >
              <h1 className="stepHeader">STEP 4</h1>
              <h1 style={{width: "100%", marginTop: "-2%"}}>
              <SaveOutlined />
              </h1>
              <p className="jumboText">
                The Advanced Directive file will be in the bottom left of your screen and it can be saved anywhere on your computer.
              </p>
          </Col>
            </Container>
          </Jumbotron>
          <Jumbotron style={styles.JumboStyles} fluid="lg">
            <Container fluid="lg">
          <Col >
              <h1 className="stepHeader">STEP 5</h1>
              <h1 style={{width: "100%", marginTop: "-2%"}}>
              <UploadOutlined />
              </h1>
              <p className="jumboText">
                Click the "upload" button and select the Advanced Directive file that you just saved.
              </p>
          </Col>
            </Container>
          </Jumbotron>
          <Jumbotron style={styles.JumboStyles} fluid="lg">
            <Container fluid="lg">
          <Col >
              <h1 className="stepHeader">STEP 6</h1>
              <h1 style={{width: "100%", marginTop: "-2%"}}>
                <SmileOutlined />
              </h1>
              <p className="jumboText">
                Now enjoy your Peace Of Mind!
              </p>
          </Col>
            </Container>
          </Jumbotron>
        </section>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
      </Row>
      {/* <Row
        justify="center"
        style={{ backgroundColor: "#bfbfbe" }}
      >
      </Row> */}
      <Row
        justify="center"
        style={{ backgroundColor: "#99cc99" }}
      >
            <Jumbotron style={styles.JumboStyles} fluid="lg">
            <Container fluid="lg">
              <Row>
              <Col xs={6}>
              <h1>
        {/* <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload> */}
        <form className="formStyles">
          <div className="custom-file mb-3">
            <input type="file" onChange={(e) => {
              handleBase64(e)
            }} />
          </div>
          
          <input type="submit" value="Submit" style={{width: "200px"}} className="btn btn-primary btn-block submitBtn" onClick={() => submitADR(userData)} />
        </form>
        </h1>
        </Col>
        <Col xs={6} >
        <h1 className="signatureStyles">
        {/* <embed src={PDF.base64} type={PDF.type} /> */}
        {console.log(PDF.type)}
        {PDF.type.includes("image") ? <img src={PDF.base64} /> : <embed src={PDF.base64} type={PDF.type} />}

        <ESign
          buttonText="Patient Signature"
          whosSigning="patientSignature"
        ></ESign>
        </h1>
        </Col>
        </Row>
      </Container>
      </Jumbotron>
            </Row>
            <Row
            justify="center" className="dividerStyle">
          
        <Divider>
          <h1>OR FILL OUT FORM HERE</h1>
          </Divider>
        
      </Row>
      <Row 
      justify="center"
        style={{ backgroundColor: "#99CC99" }}>
      <Jumbotron style={styles.JumboStyles} fluid="lg">
      <Container fluid="lg">
      <PDFCreation></PDFCreation>
      </Container>
      </Jumbotron>
      </Row>
    </>
  )
};

export default LandingPage;
