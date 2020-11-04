import React from 'react'
import {Button, Row, Col, Divider, Form, Input, notification} from 'antd'



const MPOAInfo = () => {

    const openNotificationMPOA = placement => {
        notification.warning({
          message: "Why do I need to fill in an alternate Medical Power of Attorney?",
          description:
            'If the Medical Power of Attorney I have named above is not willing or able to make decisions for me then you are saying this person can act as the Medical Power of Attorney.',
          placement,
        });
      };

return (
    <>

            <Divider>
                <Row>
                    <Col>
                    Alternate Medical Power of Attorney
                    
                    <Button onClick={() => openNotificationMPOA('bottomRight')}>?</Button>
                    </Col>
                </Row>
            </Divider>

            <Row>
            
                <Col>
                    <Form>
                        <Form.Item
                        
                        label="MPOA First Name"
                        
                        >
                            <Input  placeholder="Johnathan Edward Smith" />

                        </Form.Item>
                        <Form.Item
                        
                        label="MPOA Middle Name"
                        
                        >
                            <Input  placeholder="Johnathan Edward Smith" />

                        </Form.Item>
                        <Form.Item
                        
                        label="MPOA Last Name"
                        
                        >
                            <Input  placeholder="Johnathan Edward Smith" />

                        </Form.Item>
                        </Form>
                        </Col>
                        <Col>
                        <Form>
                        <Form.Item
                        
                        label="MPOA's Relationship to Me"
                        
                        >
                            <Input  placeholder="Ex. Friend/Partner/Cousin" />

                        </Form.Item>
                        <Form.Item
                        
                        label="MPOA Phone Number"
                        
                        >
                            <Input  placeholder="Ex. (678) 343-7677" />

                        </Form.Item>
                        
                        </Form>
                        </Col>
                        <Col>
                        <Form>
                        <Form.Item
                        
                        label="MPOA Adress Street"
                        
                        >
                            <Input  placeholder="75677 E. Alameda" />

                        </Form.Item>
                        <Form.Item
                        
                        label="MPOA Adress City"
                        
                        >
                            <Input  placeholder="Phoenix" />

                        </Form.Item>
                        <Form.Item
                        
                        label="MPOA Adress State"
                        
                        >
                            <Input  placeholder="Ex. Arizona" />

                        </Form.Item>
                        <Form.Item
                        
                        label="MPOA Adress ZipCode"
                        
                        >
                            <Input  placeholder="Ex. 85015" />

                        </Form.Item>
                        
                    </Form>
                        </Col>
            
            </Row>
            
    </>
)
}

export default MPOAInfo