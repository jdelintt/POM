import React from 'react'
import { PDFExport } from '@progress/kendo-react-pdf';
import {Button} from 'antd'


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

        <h1>
            Hello!!
        </h1>
            <div>
                <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fd17fnq9dkz9hgj.cloudfront.net%2Fbreed-uploads%2F2018%2F09%2Fdog-landing-hero-lg.jpg%3Fbust%3D1536935129%26width%3D1080&imgrefurl=https%3A%2F%2Fwww.petfinder.com%2Fdog-breeds%2F&tbnid=jPIpNCa-zhVMbM&vet=12ahUKEwi6puXPydrsAhXWAzQIHU2NARsQMygBegUIARDPAQ..i&docid=7j5L-QcDix4o2M&w=1080&h=447&q=dogs&ved=2ahUKEwi6puXPydrsAhXWAzQIHU2NARsQMygBegUIARDPAQ"></img>
            </div>

        </PDFExport>
</div>

        
    )
    }

export default ExportPDF