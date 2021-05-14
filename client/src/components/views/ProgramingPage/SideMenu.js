import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { LaptopOutlined, HomeOutlined } from '@ant-design/icons';


function SideMenu(props) {
    const [blogs, setBlogs] = useState([])
    const [blogList, setBlogList] = useState([])

    const callBlogs = async () => {
        const res = await fetch('/api/blog/getBlogs');
        const body = await res.json();
    
        return body; 
    }
    const callBlogList = async () => {
        const res = await fetch('/api/blog/getBloglist');
        const body = await res.json();
    
        return body; 
    }

    useEffect(() => {
        callBlogs()
            .then( res => setBlogs(res.blogs))
            .catch( err => console.log(err))
        callBlogList()
            .then( res => setBlogList(res.list))
            .catch( err => console.log(err))
    }, [])
    
    return (
        <Menu
            onClick={(event) => {props.history.push(`/Programing/${event.key}`)}}
            style={{ width: '256px' }}
            defaultSelectedKeys={['Overview']}
            defaultOpenKeys={['Web']}
            mode="inline"
        >   
            <Menu.Item key="Overview" icon={<HomeOutlined/>}>Overview</Menu.Item>
            {blogList.map( (list) => (
                <Menu.SubMenu key={list.category} icon={<LaptopOutlined />} title={list.category}>
                    {list.subCategory.map( (subCategory) => (
                        <Menu.ItemGroup key={subCategory} title={subCategory}>
                            {blogs.map( blog => {if(blog.category === subCategory) return <Menu.Item key={blog.title}>{blog.title}</Menu.Item>})}
                        </Menu.ItemGroup>
                    ))}
                </Menu.SubMenu>
            ))}
        </Menu>
    )
}

export default SideMenu



