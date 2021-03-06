import React from 'react'
import { PDFExport } from '@progress/kendo-react-pdf';
import { Form, Input, Button, DatePicker, Row, Col, message } from 'antd';
import './AdvancedDirective.css'
import { useRef, useState } from 'react';
import moment from 'moment';
import PartOne from './PartOne'
import PartTwo from './PartTwo'
import PartThree from './PartThree'
import PartFour from './PartFour'
import PartFive from './PartFive'
import Container from 'react-bootstrap/esm/Container';

const ExportPDF = () => {

    const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.save();
    }

    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
      };

      const dateFormat = 'YYYY/MM/DD';

      
    return(


<div
className="MainDiv"
>
    
    <PDFExport ref={inputEl} paperSize="auto">
        <Row
        justify="center"
        
        >
          <h1>
            P.O.M. Advanced Directive
        </h1>  
        </Row>
            <Row
                style={{height: 220}}
                justify="center"
            >   
            <div>
                <img
                className="Main-Logo" 
                ref={inputEl}
                alt="Image"
                src="Component.jpg"/>
            </div>
        </Row>
        <br></br>
        <br></br>
        <Row
        justify="center"
        > 
        <h1>Maine Health Care Advance Directive Form</h1>
        </Row>
        <Container id="formStyle">
            <Row
            justify="center"
            >
                <h1>
                    Personal Information
                </h1>
            </Row>
        <Row
        justify="start"
        style={{ marginTop: 70 }}
        > 
        <Col md={6}>
            <Form>
                <Form.Item
                label="First Name"
                >
                <Input placeholder="Johnathan Edward Smith" />
                </Form.Item>
                <Form.Item
                label="Middle Name"
                >
                <Input placeholder="Johnathan Edward Smith" />
                </Form.Item>
                <Form.Item
                label="Last Name"
                >
                <Input placeholder="Johnathan Edward Smith" />
                </Form.Item>
            </Form>
            <Form.Item
                label="Date Of Birth"
                >
            <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
            </Form.Item>
            
            </Col>
            <Col md={6} id="addressColumn">
        {/* <Row
        justify="start"
        >  */}
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
        
        </Container>
        <Row
        style={{ marginTop: 70 }}
        justify="center"
        >
            <p>This is a list of all the poeple that have a copy of my signed healthcare directive</p>
        </Row>
        <Row gutter={[16, 48]}
        style={{ marginBottom: 70 }}
        
        >
            <Col>
            <Form>
                 <Form.Item
                label="First Name"
                >
                <Input placeholder="Fred" />
                </Form.Item>
                <Form.Item
                label="Last Name"
                >
                <Input placeholder="Jimenez" />
                </Form.Item>
                <Form.Item
                label="Phone Number"
                >
                <Input placeholder="(590) 789-6777" />
                </Form.Item>
                <Form.Item
                label="Email"
                >
                <Input placeholder="jjimenez@gmail.com" />
                </Form.Item>
            </Form>
            </Col>
            <Col>
            <Form>
                 <Form.Item
                label="First Name"
                >
                <Input placeholder="Fred" />
                </Form.Item>
                <Form.Item
                label="Last Name"
                >
                <Input placeholder="Jimenez" />
                </Form.Item>
                <Form.Item
                label="Phone Number"
                >
                <Input placeholder="(590) 789-6777" />
                </Form.Item>
                <Form.Item
                label="Email"
                >
                <Input placeholder="jjimenez@gmail.com" />
                </Form.Item>
            </Form>
            </Col>
            <Col>
            <Form>
                 <Form.Item
                label="First Name"
                >
                <Input placeholder="Fred" />
                </Form.Item>
                <Form.Item
                label="Last Name"
                >
                <Input placeholder="Jimenez" />
                </Form.Item>
                <Form.Item
                label="Phone Number"
                >
                <Input placeholder="(590) 789-6777" />
                </Form.Item>
                <Form.Item
                label="Email"
                >
                <Input placeholder="jjimenez@gmail.com" />
                </Form.Item>
            </Form>
            </Col>
        </Row>
        <PartOne>

        </PartOne>
        <PartTwo></PartTwo>
        <PartThree></PartThree>
        <PartFour></PartFour>
        <PartFive></PartFive>
        <Button
    onClick={onButtonClick}
    >
PDF Creation
    </Button>
            </PDFExport>

</div>
        
    )
}

export default ExportPDF