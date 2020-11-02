import React from 'react'
import {notification, Button, Row} from 'antd'

const PartOne = () => {

    const openNotificationWithIcon = type => {
        notification[type]({
          message: 'Notification Title',
          description:
            'MPOA-Medical Power of Attorney. This is a friend or family member who could speak on your behalf, should you be unconscious, about what you want for end of life care. This person is someone who knows your choices and can comfortably advocate for them.',
        });
      };

    return(
        <>
        <Row>
        <h1>Power of Attorney for Health Care</h1>
        <p>
        <Button onClick={() => openNotificationWithIcon('info')}>?</Button>

        </p>
        </Row>
        </>
        



    )

}

export default PartOne