import React from 'react';
import { Progress, Row, Button } from 'antd';
import Timer from '../../../utils/Timer';
import GridCard from '../../../utils/GridCard';

function LandingPage(props) {
    
    return (
        <>
            <div className="Banner" style={{paddingTop:'80px'}}>
                <div className="TextBox">
                    <h1 style={{fontSize: '90px'}}>OpenFolio</h1>
                    <p>Organize your thoughts, the foundation for the next. Leave your footsteps</p>
                </div>
                <Button type="primary" shape="round" size="large" style={{margin: '10px'}}>Getting Started!</Button>
                <Button type="default" shape="round" size="large" style={{margin: '10px'}}>Lead More!</Button>
            </div>
            <div className="Content">
                <div className="left"></div>
                <div className="center">
                    <h1>Rescent Activities</h1>
                    <Row gutter={[0, 32]}>
                        <GridCard />
                        <GridCard />
                        <GridCard />
                        <GridCard />
                        <GridCard />
                    </Row>
                    <h1>Timer</h1>
                        <Timer />
                    <h1>Progress</h1>
                        <Progress type="circle" percent={75} />
                        <Progress type="circle" percent={70} status="exception" />
                        <Progress type="circle" percent={100} />
                </div>
                <div className="right"></div>
                
            </div>
        </>
    )
}

export default LandingPage
