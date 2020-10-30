import React, { useContext, useEffect, useState } from "react";
import API from "./../../utils/API";
import { AuthContext } from "./../../context/AuthContext";
import ESign from "./../../components/eSign"
import './LandingPage.css';

import { Row, Col, Card, Upload, message, Divider, Form, Input, Button, Checkbox } from 'antd'
import SeniorImage from '../../utils/SVG/SeniorSVG'
import PDFCreation from '../Forms/AdvancedDirective'
import 'antd/dist/antd.css'





const LandingPage = () => {

  const { user } = useContext(AuthContext);

  const [PDF, setPDF] = useState({base64 : "", type : ""});
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
    
    setPDF({base64 : basedIt, type : pdfTypeArray2[1]})
    setUserdata({...userData, ADirFile : basedIt, ADirFileType : pdfTypeArray2[1]})
    

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
      <section id="parallax-world-of-ugg">
      
        <button onClick={handleLogout}>Logout</button>
        <section>
          <div className="title">
            <h3>{user.username}</h3>
            {/* <h1>{fullName(user)}</h1> */}
          </div>
        </section>
      </section>
      <Row
        justify="center"
      >
        <Col span={7}>
          <SeniorImage></SeniorImage>

        </Col>





      </Row>

      <Row
        justify="center"
        style={{ backgroundColor: "#fff1b8" }}
      >
        <section id="instructional-part">
          <div className="ins">
            <h1>Instructions</h1>
          </div>

        </section>

      </Row>
      <Row
        justify="center"
        style={{ backgroundColor: "#fff1b8" }}
      >

        <Col
          span={8}
        >
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Step One" description="Fill out your medical information in the DNR Document Creator below" />
          </Card>

        </Col>
        <Col
          span={8}
        >

          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Step Two" description="Click Save and Create to generate a DNR document" />
          </Card>
        </Col>


        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Step Three" description="Find all your documents in the Medical Document section at the top of the page" />
        </Card>

      </Row>
      <Row
        justify="center"
        style={{ backgroundColor: "#ffd666" }}
      >
        {/* <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload> */}
        <form >
          <div className="custom-file mb-3">
            <input type="file" onChange={(e) => {
              handleBase64(e)
            }} />
          </div>
          <input type="submit" value="Submit" className="btn btn-primary btn-block" onClick = {() => submitADR(userData)} />
        </form>
        {/* <embed src={PDF.base64} type={PDF.type} /> */}
        {console.log(PDF.type)}
        {PDF.type.includes("image") ? <img src={PDF.base64}/> : <embed src={PDF.base64} type={PDF.type} />}

        <ESign
        buttonText = "Patient Signature"
        whosSigning = "patientSignature"
        ></ESign>



        <Divider>OR FILL OUT FORM HERE</Divider>


        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
        </Button>
          </Form.Item>
        </Form>
      </Row>


<PDFCreation></PDFCreation>

    </>
  )
};

export default LandingPage;
