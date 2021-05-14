import React from 'react';
import { Link } from 'react-router-dom';
import { Progress, Button } from 'antd';
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
                <Button type="primary" shape="round" size="large" style={{margin: '10px'}}><Link to='/register'>Getting Started!</Link></Button>
                <Button type="default" shape="round" size="large" style={{margin: '10px'}}><Link to='/Programing/Overview'>Lead More!</Link></Button>
            </div>

            <div className="Content">
                <div className="left"></div>
                <div className="center">
                    <h1>Rescent Activities</h1>
                        <GridCard />
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
