import React from 'react'
import {notification, Button, Row, Col, Divider, Form, Input, Radio} from 'antd'
import MPOAInfo from './MPOA'
import {useState} from 'react'
import './PartOne.css'


const PartOne = () => {

    const [setValue, setNumber] = useState();

    const openNotificationWithIcon = type => {
        notification[type]({
          message: 'What is a Medical Power of Attorney',
          description:
            'MPOA-Medical Power of Attorney. This is a friend or family member who could speak on your behalf, should you be unconscious, about what you want for end of life care. This person is someone who knows your choices and can comfortably advocate for them.',
        });
      };
      

      const changeRadio = e => {
        console.log('radio checked', e.target.value);
        setNumber(
          e.target.value,
          
        );
      };
      const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };
      const openNotificationforGuardian = type => {
        notification[type]({
          message: 'What is a guardian?',
          description:
            'A guardian is a person chosen by the court to make decisions about personal care. The decisions can include not only health care but other decisions as well. Check the box below to nominate your agent or guardian',
        });
      };

      const openNotification = placement => {
        notification.warning({
          message: `What is a Medical Power of Attorney`,
          description:
            'This is a friend or family member who could speak on your behalf, should you be unconscious, about what you want for end of life care. This person is someone who knows your choices and can comfortably advocate for them.',
          placement,
        });
      };

      
      
      

    return(
        <>
        
        <Row
        justify="center"
        gutter={[16, 48]}
        >
        <h1>Power of Attorney for Health Care</h1>
        <p>
        

        </p>
        </Row>


        <Row
        justify='center'
        gutter={[16, 48]}
        >
        <Button onClick={() => openNotification('bottomRight')}>
        
        ?
      </Button>
        </Row>
    
            
       
        <Row
        justify='start'
        gutter={[16, 48]}
        >
            <Col>
            <h1>
                Who can be your Medical Power of Attorney (MPOA)
            </h1>
            <p>
                You can name any adult to be your Medical Power of Attorney. However, the MPOA may NOT be the owner, operator or employee
                of a nursing home or a long-term healthcare facility. This rule does not apply if the person is your relative.
            </p>
            </Col>
        </Row>
        <Row
        justify='start'
        gutter={[16, 48]}
        >
            <Col>
            
            <h1>
                How does my MPOA make decisions?
            </h1>
            <p>
                If your MPOA does not know what you want, they must make decisions consistent with your personal values, if known, based
                on your best interests. In the next section labled "Special Instructions", you can write out exactly what you want your MPOA
                to follow.
            </p>
            </Col>
        </Row>
        <Row
        justify='start'
        gutter={[16, 48]}
        >
            <Col>
            
            <h1>
                Who can see your healthcare information?
            </h1>
            <p>
                Once your MPOA has the right to make healthcare decisions on your behalf, your MOPA can look at and give others the right to
                look at your medical documents. State and federal privacy laws let your MPOA see all your health information in order 
                to make the best decision on your behalf.
            </p>
            </Col>
        </Row>


            <Divider>
                Choosing a Medical Power of Attorney
            </Divider>
            <Row
            justify="center">
                Fill in the name of the person you choose to make health decisions on your behalf
                
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Item
                        
                        label="Your First Name"
                        
                        >
                            <Input  placeholder="Johnathan Edward Smith" />

                        </Form.Item>
                        <Form.Item
                        
                        label="Your Middle Name"
                        
                        >
                            <Input  placeholder="Johnathan Edward Smith" />

                        </Form.Item>
                        <Form.Item
                        
                        label="Your Last Name"
                        
                        >
                            <Input  placeholder="Johnathan Edward Smith" />

                        </Form.Item>


                    </Form>
                </Col>
            </Row>
            <Divider>
                <Row>
                    <Col>
                    Medical Power of Attorney
                    
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
            <Row
            justify="center"
            >

             
            </Row>
            
            <MPOAInfo>
                <p>
                    Hello
                </p>
                </MPOAInfo>
                <MPOAInfo></MPOAInfo>
                <Row
                justify='start'
                >
                <h1>
                    Your Medical Power of Attorney's Power:
                </h1>
                </Row>
                <Row>
                <Row>
                
                <p>
                    When can my MPOA start making decisions for me? (Check only one box: A or B)
                </p>
                
            </Row>
                </Row>
                
                <Row >
                    
                    
                    <Radio.Group
                    onChange={changeRadio} value={setValue}
                    >
                    <Radio value={1} style={radioStyle}>
                        A. 
                    </Radio>
                    <Radio value={2} style={radioStyle} className="Radio-Div">
                        
                        B. 
                    </Radio>


                    </Radio.Group>
                                   
                  </Row>
                  <Row>
                      <p>
                        A)     My Medical Power of Attorney can make decisions only when my primary care physician or judge
                        decides that I am too sick to make my own decisions   
                      </p>
                  </Row>
                  <Row>
                      <p>
                          B)     My Medical Power of Attorney can start making decisions for me right away. This does not mean
                        that I have given up the right to make my own decisions. 
                        When my MPOA makes a decision for me, I 
                        will be told about that decision, unless I have instructed my doctor 
                        I don't want to know. If I
                        disagree with the decision I can change my mind, end my MPOA's right 
                        to make decisions on my behalf, and 
                        change to another MPOA of my choosing. I must tell
                         my primary care physician or put my decision in writing
                        by singing my new MPOA.
                                
                      </p>
                  </Row>
                  <Row>
                      <Divider>
                          Nominating a guardian:
                      </Divider>
                  </Row>
                  <Row>
                  <Button onClick={() => openNotificationforGuardian('info')}>?</Button>   
                  </Row>
                  <Row>

                  <Radio.Group
                    onChange={changeRadio} value={setValue}
                    >
                    <Radio value={3} style={radioStyle}>
                        Yes 
                    </Radio>
                    <Radio value={4} style={radioStyle}>
                        
                        No 
                    </Radio>


                    </Radio.Group>

                  </Row>
                  <Row>
                      <p>
                          If you want to nominate someone other than your guardian, you may fill in the section below.
                      </p>
                      
                  </Row>
                  <Row>
                      <p>
                          If a judge needs to appoint a guardian for me, I nominate the person named below as my guardian.
                      </p>
                  </Row>
                
                    <Row>
                        <Form>
                    <Form.Item
                        
                        label="Guardian's First Name"
                        
                        >
                            <Input  placeholder="Johnathan Edward Smith" />

                        </Form.Item>
                        <Form.Item
                        
                        label="Guardian's Middle Name"
                        
                        >
                            <Input  placeholder="Johnathan Edward Smith" />

                        </Form.Item>
                        <Form.Item
                        
                        label="Guardian's Last Name"
                        
                        >
                            <Input  placeholder="Johnathan Edward Smith" />

                        </Form.Item>
                        </Form>
                        
                        
                        <Form>
                        <Form.Item
                        
                        label="Guardian's Relationship to Me"
                        
                        >
                            <Input  placeholder="Ex. Friend/Partner/Cousin" />

                        </Form.Item>
                        <Form.Item
                        
                        label="Guardian's Phone Number"
                        
                        >
                            <Input  placeholder="Ex. (678) 343-7677" />

                        </Form.Item>
                        
                        </Form>
                        
                        
                        <Form>
                        <Form.Item
                        
                        label="Guardian Adress Street"
                        
                        >
                            <Input  placeholder="75677 E. Alameda" />

                        </Form.Item>
                        <Form.Item
                        
                        label="Guardian Adress City"
                        
                        >
                            <Input  placeholder="Phoenix" />

                        </Form.Item>
                        <Form.Item
                        
                        label="Guardian Adress State"
                        
                        >
                            <Input  placeholder="Ex. Arizona" />

                        </Form.Item>
                        <Form.Item
                        
                        label="Guardian Adress ZipCode"
                        
                        >
                            <Input  placeholder="Ex. 85015" />

                        </Form.Item>
                        </Form>
                        </Row>
                    
            
        
                    
                  
    
          

        </>
        




    )

}

export default PartOne