import React from 'react'
import { useSelector } from "react-redux";
import { withRouter, Link } from 'react-router-dom';

import axios from 'axios';

import { Avatar } from 'antd';
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
    if (user.userData && !user.userData.isAuth){
        return (<Link to='/login' >Login</Link>)
    } else {
        return (<a onClick={onClickLogout}><Avatar size={32} icon={<UserOutlined />} /></a>)
    }
}

export default withRouter(Account)