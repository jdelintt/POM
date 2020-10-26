import React, { useContext, useEffect } from "react";
import API from "./../../utils/API";
import { AuthContext } from "./../../context/AuthContext";

// import './LandingPage.css';
import { Row, Col, Card, Upload, message, Divider, Form, Input, Button, Checkbox } from 'antd'
import SeniorImage from '../../utils/SVG/SeniorSVG'
import { UploadOutlined, EditOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'

const LandingPage = () => {
  const { user } = useContext(AuthContext);

  console.log(user)

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
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
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

          <SeniorImage></SeniorImage>
       






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
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>

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




    </>
  )
};

export default LandingPage;