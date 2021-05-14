import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Empty } from 'antd';
import { useParams } from 'react-router';

function Contents() {
    const [post, setPost] = useState([])
    const { Topics } = useParams()

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
    }, [Topics])

    if(post) {
        return (
            <div className="postPage" style={{margin: '40px'}}>
                <h1>{post.title}</h1>
                <br />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {post.createdAt}
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            )
    } else {
        return (
            <Empty />
        )
    }
}

export default Contents
