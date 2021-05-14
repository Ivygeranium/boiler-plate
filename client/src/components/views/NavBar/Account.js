import React from 'react'
import { useSelector } from "react-redux";
import { withRouter, Link } from 'react-router-dom';

import axios from 'axios';
import { Avatar, Popover, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons'

function Account(props) {
    const user = useSelector(state => state.user)
    const onClickLogout = (event) => {
        axios.get('/api/users/logout')
            .then( res => {
                if(res.data.success) {
                    props.history.push('/login');
                } else {
                    alert("Failed to Logout");
                }
            });
    }

    const content = (
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', width: '256px'}}>
            <Avatar size={64} icon={<UserOutlined />} style={{margin: '30px'}}/>
            <Button block><Link to='/account'>Update Account</Link></Button>
            <Button onClick={onClickLogout} danger style={{margin: '30px'}}>Log out</Button>
        </div>
    );
    if (user.userData && !user.userData.isAuth){
        return (<Link to='/login' >Login</Link>)
    } else {
        return (
            <Popover placement="bottomRight" title="Account" content={content} trigger="click">
                <Button type="text" icon={<Avatar icon={<UserOutlined />}/>}></Button>
            </Popover>
        )
    }
}

export default withRouter(Account)