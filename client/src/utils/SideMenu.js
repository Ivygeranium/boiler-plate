import React from 'react';
import { Menu } from 'antd';
import { Html5Outlined, LaptopOutlined, HomeOutlined, DeploymentUnitOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;


function SideMenu(props) {

    return (
        <Menu
            onClick={(event) => {props.history.push(`/Programing/${event.key}`)}}
            style={{ width: 256 }}
            defaultSelectedKeys={['Overview']}
            defaultOpenKeys={['AI', 'CS']}
            mode="inline"
        >   
            <Menu.Item key="Overview" icon={<HomeOutlined/>}>Overview</Menu.Item>
            <SubMenu key="Web" icon={<Html5Outlined />} title="Web">
                <Menu.Item key="HTML">HTML</Menu.Item>
                <Menu.ItemGroup key="CSS" title="CSS">
                    <Menu.Item key="CSS1">Option 1</Menu.Item>
                    <Menu.Item key="CSS2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="NodeJS" title="NodeJS">
                    <Menu.Item key="NodeJS1">Option 3</Menu.Item>
                    <Menu.Item key="NodeJS2">Option 4</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="React" title="React">
                    <Menu.Item key="React1">Option 3</Menu.Item>
                    <Menu.Item key="React2">Option 4</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="DataBase" title="DataBase">
                    <Menu.Item key="DataBase1">Option 3</Menu.Item>
                    <Menu.Item key="DataBase2">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>

            <SubMenu key="AI" icon={<DeploymentUnitOutlined />} title="Artificial Intelligence">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub4" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
            </SubMenu>

            <SubMenu key="CS" icon={<LaptopOutlined />} title="Computer Science">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
      </Menu>
    )
}

export default SideMenu



