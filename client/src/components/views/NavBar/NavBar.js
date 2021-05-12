import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { CodeOutlined, StockOutlined } from '@ant-design/icons'
import Account from './Account';

function NavBar() {
    return (
        <nav>
            <div className="Logo"><a href="/">OpenFoilo</a></div>
            <Menu mode="horizontal" >
                <Menu.Item key="Programing"><NavLink to='/Programing/Overview'><CodeOutlined />Programing</NavLink></Menu.Item>
                <Menu.Item key="Create"><NavLink to='/Programing/Create'>Create</NavLink></Menu.Item>
                <Menu.Item key="Finance"><NavLink to='/Finance'><StockOutlined />Finance</NavLink></Menu.Item>
                <Menu.Item className="Account"><Account/></Menu.Item>
            </Menu>
        </nav>
    )
}

export default NavBar
