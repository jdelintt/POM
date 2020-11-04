import React from 'react'
import {notification, Button, Row, Col, Divider, Form, Input, Radio, Checkbox} from 'antd'
import ESign from '../../components/eSign'






const PartFive = () => {

    
    return (

<>
<Divider>
    Signing the Form
    </Divider>
        <Row>
            <Form>
            <Form.Item
            label="Your First Name">
                <Input placeholder="Johnathan Edward Smith" />
            </Form.Item>
            <Form.Item
            label="Your Last Name">
    <Input placeholder="Johnathan Edward Smith" />
    </Form.Item>
    <Form.Item
    label="Phone Number">
    <Input placeholder="(590) 689-7868" />
    </Form.Item>
        </Form>
        </Row>
        <Row>
            <Col
            span={12}
            >
            <p>
                Sign Here to the right by clicking the button
            </p>
            </Col>
            <Col 
            span={12}
            >
             <ESign
                buttonText="Patient Signature"
                whosSigning="patientSignature"
              ></ESign>
            </Col>
           
        </Row>
</>
    )
}

export default PartFive