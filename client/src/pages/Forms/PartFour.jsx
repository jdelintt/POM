import React from 'react'
import {notification, Button, Row, Col, Divider, Form, Input, Radio, Checkbox} from 'antd'






const PartFour = () => {

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }
    return (
<>
<Divider>
    Part Four - Donation of Body, Organs or Tissues at Death
</Divider>
<Row
justify='center'
>
    <p>
        This section is optional. Fill out this part only if you want to give directions about 
        donating your body.
    </p>
</Row>
<Row
justify='center'
>
    <Checkbox
    onChange={onChange}
    >
        I do not wish to donate any organs, tissues or body parts
    </Checkbox>
</Row>

</>
    )
}

export default PartFour