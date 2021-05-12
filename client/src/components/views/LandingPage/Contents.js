import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Empty, Typography } from 'antd';
import { useParams } from 'react-router';

const { Title } = Typography


function Contents(props) {
    
    const { Topics } = useParams();
    const [post, setPost] = useState([])

    useEffect(() => {
        const postInfo = { title: Topics }
        
        axios.post('/api/blog/getPost', postInfo)
            .then( res => {
                if(res.data.success){
                    setPost(res.data.post)
                } else {
                    alert('Failed to bring post!')
                }
            })
    })
    if(post) {
        if (post.title) {
            return (
                <div className="postPage" style={{ width: '80%', margin: '3rem auto' }}>
                    <Title level={2}>{post.title}</Title>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Title level={4}>{post.createdAt}</Title>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />

                </div>
            )
        } else {
            return (
                <div style={{ width: '80%', margin: '3rem auto' }}>loading...</div>
            )
        }
    } else {
        return (
            <Empty />
        )
    }
}

export default Contents
