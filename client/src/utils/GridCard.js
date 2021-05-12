import React from 'react';
import { Card, Col } from 'antd';


const { Meta } = Card;
const cards = {
    card1: <Card
    style={{ width: 320 }}
    cover={
    <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    />
    }
    // actions={[
    // <SettingOutlined key="setting" />,
    // <EditOutlined key="edit" />,
    // <EllipsisOutlined key="ellipsis" />,
    // ]}
>
    <Meta
    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
    title="Card title"
    description="This is the description"
    />
    </Card>
}


function GridCard(props) {
    return (
        <Col lg={8} md={12} xs={24}>
            <div style={{ position: 'relative' }}>
                {cards.card1}
            </div>
        </Col>
    )
}

export default GridCard


