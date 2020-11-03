import React from 'react'
import {notification, Button, Row, Col, Divider, Form, Input, Radio, Checkbox} from 'antd'






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
            <p>
                Sign Here
            </p>
        </Row>
</>
    )
}

export default PartFive