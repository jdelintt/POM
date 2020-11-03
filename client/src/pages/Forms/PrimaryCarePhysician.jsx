import React from 'react'
import {notification, Button, Row, Col, Divider, Form, Input, Radio} from 'antd'
const PCP = () => {
    return (
<>

<Row
        justify="center"
        > 
        <Col>
            <Form>
                <Form.Item
                label="First Name"
                >
                <Input placeholder="Johnathan Edward Smith" />
                </Form.Item>
                <Form.Item
                label="Last Name"
                >
                <Input placeholder="Johnathan Edward Smith" />
                </Form.Item>
                <Form.Item
                label="Phone Number"
                >
                <Input placeholder="(590) 689-7868" />
                </Form.Item>
            </Form>
            
            
            </Col>
            <Col>
       
            <Form>
                <Form.Item
                label="Address (Street)"
                >
                <Input placeholder="Ex. 330 W. California Blvd #213 Pasadena, CA 91105" />
                </Form.Item>
            </Form>
            <Form>
                <Form.Item
                label="Address (City)"
                >
                <Input placeholder="Ex. 330 W. California Blvd #213 Pasadena, CA 91105" />
                </Form.Item>
            </Form>
            <Form>
                 <Form.Item
                label="Address (State)"
                >
                <Input placeholder="Ex 330 W. California Blvd #213 Pasadena, CA 91105" />
                </Form.Item>
            </Form>
            <Form>
                 <Form.Item
                label="Address (Zipcode)"
                >
                <Input placeholder="Ex 330 W. California Blvd #213 Pasadena, CA 91105" />
                </Form.Item>
            </Form>
            </Col>  
            </Row>    

</>
    )
}

export default PCP