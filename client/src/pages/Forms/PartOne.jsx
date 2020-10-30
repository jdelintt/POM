import React from 'react'
import {notification, Button, Row} from 'antd'

const PartOne = () => {

    const openNotificationWithIcon = type => {
        notification[type]({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
      };

    return(
        <>
        <Row>
        <h1>Power of Attorney for Health Care</h1>
        <p>
        <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>

        </p>
        </Row>
        </>
        



    )

}

export default PartOne