import React from 'react'
import {notification, Button, Row, Col, Divider, Form, Input, Radio} from 'antd'
import PCPDoc from './PrimaryCarePhysician'

import {useState} from 'react'



const PartThree = () => {
    return (
<>
<Divider>
    Primary Physician Information
</Divider>
<Row>
    <p>
       This section will allow us to send your documents directly to your primary care physician. 
    </p>
    
</Row>
<Row
justify='center'
>
    <h1>
        Primary Care Physician One
        <PCPDoc></PCPDoc>
    </h1>
        
    
    
</Row>
<Row
justify='center'
>
    <h1>
         Primary Care Physician Two
        <PCPDoc></PCPDoc>
    </h1>
    
</Row>
</>
    )
}

export default PartThree