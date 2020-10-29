import React from 'react'
import { PDFExport } from '@progress/kendo-react-pdf';
import {Button, Row} from 'antd'





import { useRef } from 'react';

const ExportPDF = () => {

    

    const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.save();
    }

    return(


<div>
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
            Hello!!
        </h1>  
        </Row>
        
            <div>
                <img 
                ref={inputEl}
                alt="Image"
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"/>
            </div>

        </PDFExport>
</div>

        
    )
    }

export default ExportPDF