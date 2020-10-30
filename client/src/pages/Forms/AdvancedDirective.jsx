import React from 'react'
import { PDFExport } from '@progress/kendo-react-pdf';
<<<<<<< HEAD
import { Button } from 'antd'


import { useRef } from 'react';

const ExportPDF = () => {


=======
import { Form, Input, Button, DatePicker, Row, Col } from 'antd';
import './AdvancedDirective.css'
import { useRef, useState } from 'react';
import moment from 'moment';
import PartOne from './PartOne'

const ExportPDF = () => {

    const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
>>>>>>> c9a415ac05c33a4f859033c9a3207f7bab353ec9

    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.save();
    }

<<<<<<< HEAD
    return (


        <div>
            <Button
                onClick={onButtonClick}
            >
                Click me
    </Button>

            <PDFExport ref={inputEl} paperSize="A4">

                <h1>
                    Hello!!
        </h1>
                <div>
                    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fd17fnq9dkz9hgj.cloudfront.net%2Fbreed-uploads%2F2018%2F09%2Fdog-landing-hero-lg.jpg%3Fbust%3D1536935129%26width%3D1080&imgrefurl=https%3A%2F%2Fwww.petfinder.com%2Fdog-breeds%2F&tbnid=jPIpNCa-zhVMbM&vet=12ahUKEwi6puXPydrsAhXWAzQIHU2NARsQMygBegUIARDPAQ..i&docid=7j5L-QcDix4o2M&w=1080&h=447&q=dogs&ved=2ahUKEwi6puXPydrsAhXWAzQIHU2NARsQMygBegUIARDPAQ"></img>
                </div>

            </PDFExport>
        </div>


=======
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
      };

      const dateFormat = 'YYYY/MM/DD';
    return(


<>
    <Button
    onClick={onButtonClick}
    >
Click me
    </Button>
    <PDFExport ref={inputEl} paperSize="A4">
        <Row
        justify="center"
        >
          <h1>
            P.O.M. Advanced Directive
        </h1>  
        </Row>
            <Row
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
        <Row
        justify="center"
        > Maine Health Care Advance Directive Form
        </Row>

        <Row
        justify="start"
        > 

            <Form>
                <Form.Item
                label="Full Legal Name"
                >
                <Input placeholder="Johnathan Edward Smith" />
                </Form.Item>
            </Form>
        </Row>
        <Row
        justify="start"
        > 
            <Col>

            <Form>
                
                <Form.Item
                label="Address (Street)"
                >
                <Input placeholder="Ex. 330 W. California Blvd #213 Pasadena, CA 91105" />
                </Form.Item>
            </Form>

            </Col>
            <Col>
            <Form>

                <Form.Item
                label="Address (City)"
                >
                <Input placeholder="Ex. 330 W. California Blvd #213 Pasadena, CA 91105" />
                </Form.Item>

            </Form>
            
            </Col>
            <Col>
            <Form>
                 <Form.Item
                label="Address (State)"
                >
                <Input placeholder="Ex 330 W. California Blvd #213 Pasadena, CA 91105" />
                </Form.Item>
            </Form>
           
            
            </Col>
            <Col>
            <Form>
                 <Form.Item
                label="Address (Zipcode)"
                >
                <Input placeholder="Ex 330 W. California Blvd #213 Pasadena, CA 91105" />
                </Form.Item>
            </Form>
           
            
            </Col>
            
                
                
            
        </Row>
        <Row>
            Date of Birth
        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
        </Row>

        <Row
        justify="center"
        >
            <p>This is a list of all the poeple that have a copy of my signed healthcare directive</p>
        </Row>
        <Row gutter={[16, 48]}>
            <Col offset={1}>
            <Input>
            </Input>
            </Col>
            <Col>
            <Input>
            </Input>
            </Col>
            <Col offset={1}>
            <Input>
            </Input>
            </Col>
            <Col offset={1}>
            <Input>
            </Input>
            </Col>
            <Col>
            <Input>
            </Input>
            </Col>
            <Col offset={1}
            >
            <Input>
            </Input>
            </Col>
        </Row>
        <PartOne>

        </PartOne>
            </PDFExport>

</>
        
>>>>>>> c9a415ac05c33a4f859033c9a3207f7bab353ec9
    )
}

export default ExportPDF