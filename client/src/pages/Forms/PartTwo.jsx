import React from 'react'
import {notification, Button, Row, Col, Divider, Form, Input, Radio} from 'antd'

import {useState} from 'react'



const PartTwo = () => {

    const [setValue, setNumber] = useState();
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

      const { TextArea } = Input
    return (


<>
<Divider>
    Life Sustaining Treatment Choices
</Divider>
<Row
justify="center"
>
    <p>
            You should check ONE of the boxes below to show your choice about getting treatments that would keep you alive:
    </p>
</Row>
<Row 
justify='center'
>
                    
                    
  <Radio.Group
onChange={changeRadio} value={setValue}>
<Radio value={1}> A. Choice NOT to be kept alive.
</Radio>
<Radio value={2}>
B. Choice to be kept alive.
</Radio>
</Radio.Group>
</Row>

<Row
justify="center"
>
 <Col 
 span={8}
 >
 <p>
     Choice A.
 </p>
 <p>
     I do not want treatment to keep me alive if my physician decides either are true
 </p>
 <p>
     i) I have an ilness that will not get better.
 </p>
 <p>
     I am no longer conscious and it is unlikely I will become conscious.
 </p>
 </Col> 
 <Col>
 </Col>
 <Col
 span={8}
 >
 <p>
     Choice B.
 </p>
 <p>
     I want to be kept alive as long as possible within the limits of generally accepted health care standards.
 </p>
 </Col>  
</Row>
<Divider>

    Life Sustaining Treatment Choices
</Divider>
<Row 
justify='center'
>
                    
                    
  <Radio.Group
onChange={changeRadio} value={setValue}>
<Radio value={1}> A. Choice NOT to be kept alive.
</Radio>
<Radio value={2}>
B. Choice to be kept alive.
</Radio>
</Radio.Group>
</Row>

<Row
justify="center"
>
 <Col 
 span={11}
 >
 <p>
     Choice A.
 </p>
 <p>
     If my physician and second physician decide that I am in the
     late stages of Alzheimers disease or other sever dementia, 
     I do not want to be kept alive
 </p>
 
 </Col> 
 <Col>
 </Col>
 <Col
 span={11}
 >
 <p>
     Choice B.
 </p>
 <p>
 I want to be kept alive as long as possible within the limits of
  generally accepted health care standards.
 Even if my physician decides I am in the late stages of Alzheimers.
 </p>
 </Col>  
</Row>
<Divider>

    Other Directions
</Divider>
<Row
justify="center">
    You may give more directions or add any other treatment choices in the space below
</Row>
<Row>
    <TextArea rows={10}>

    </TextArea>
</Row>

</>

    )



}

export default PartTwo